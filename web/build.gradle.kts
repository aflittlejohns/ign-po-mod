import com.github.gradle.node.npm.task.NpmTask

// Apply necessary plugins
plugins {
    java  // Basic Java plugin for JAR creation
    id("com.github.node-gradle.node") version("3.2.1")  // Plugin for Node.js integration
}

java { 
	toolchain {
	languageVersion.set(JavaLanguageVersion.of(17))  // Use Java 17
}
}

// Define where the web resources will be generated
val projectOutput: String by extra("$buildDir/generated-resources/")

// Configure the Node.js environment
node {
    version.set("22.6.0")     // Node.js version to use
    npmVersion.set("10.8.2")  // npm version to use
    download.set(true)        // Download Node.js instead of using system install
    nodeProjectDir.set(file("$projectDir"))  // Where to run Node.js commands
}

// Task to install npm dependencies
val installDependencies by tasks.registering(NpmTask::class) {
    args.set(listOf("install"))
}

// Task to run webpack build
val webpack by tasks.registering(NpmTask::class) {
    args.set(listOf("run", "build"))

    // Must run npm install first
    dependsOn(installDependencies)
    
    // Define which files should trigger a rebuild
    inputs.files(project.fileTree(".").matching {
        exclude("**/node_modules/**", "**/dist/**", "**/.awcache/**", "**/yarn-error.log")
    }.toList())

    // Define where output files will be created
    outputs.files(fileTree(projectOutput))
}

// Configure standard tasks
tasks {
    // Ensure webpack runs before processing resources
	processResources {
		dependsOn(webpack)	
	}

    // Clean up the dist directory
	clean {
		delete("dist")
	}
}

// Custom deep clean task
val deepClean by tasks.registering {
    doLast {
        delete(file(".gradle"))      // Remove Gradle cache
        delete(file("node_modules")) // Remove npm dependencies
    }

    dependsOn(project.tasks.named("clean"))
}

// Ensure the gateway project waits for web resources
project(":gateway")?.tasks?.named("processResources")?.configure {
    dependsOn(webpack)
}

// Configure where the web resources end up
sourceSets {
    main {
        output.dir(projectOutput, "builtBy" to listOf(webpack))
    }
}