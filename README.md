# blockchat
Not blockchain!

Based off of:
Client:
* Angular 8 (recent)
* IntelliJ Angular plugin

Server:
* Java 11
* Spring Boot
* IntelliJ Spring Boot plugin

Dependency installation (TODO: REFINE AND VERIFY):
* Oracle JDK 11 LTS
	* downloaded from official website
	* `sudo apt install ./jdk-11.0.4_linux-x64_bin.deb`
	* (installs to `/usr/lib/jvm/jdk-11.0.4/` )
* IntelliJ Community edition
	* download
	* install in /opt with `sudo tar -C /opt -xvzf ideaIC-2019.2.tar.gz`
	* run `/opt/idea-IC-192.5728.98/bin/idea.sh`
	* use Create Desktop Entry from the Configure menu on startup for a desktop entry
	* Add JDK 11 to IntelliJ 	
* Node setup from https://www.techomoro.com/how-to-install-and-set-up-angular-8-on-ubuntu-19-04/
	* Nodejs 12 (current) setup from https://github.com/nodesource/distributions/blob/master/README.md
		* `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
		* `sudo apt-get install -y nodejs`
		* (confirm node version with node -v)
	* Update npm (to current):
		* `npm install -g @angular/cli`
		* (confirm npm version with npm -v)
	* Install Angular-cli:
		* `sudo npm install -g @angular/cli`
			* (despite the risks, I'll accept them for angular/cli for simplicity)
		* (confirm angular-cli version with `ng v` check Angular CLI / @angular-devkit/core versions)
* Gradle Wrapper comes for free with IntelliJ Java projects: downloads and runs Gradle itself
	* If I didn't have IntelliJ, would just:
		* install Gradle
		* open project directory via the command line, run `gradle wrapper`

Cloning (TODO: WRITE AND VERIFY):
* `gradle build --refresh-dependencies`
* `cd blockchat-client`
* `npm install`

Building (TODO: WRITE AND VERIFY):
* client: `ng build`
* server: `gradle build`

Running (TODO: WRITE AND VERIFY) (also builds?):
* client: `ng serve` OR `[TODO IntelliJ button]`
* server: `[TODO]` OR `[TODO IntelliJ button]`

Testing (TODO: WRITE AND VERIFY) (also builds?):
* client: `[TODO]`
* server: `[TODO]`

Debugging (TODO: WRITE AND VERIFY) (also builds?):
* client: `[TODO]`
* server: `[TODO]`

---

Notes:
* Despite the presence of other build tools, Gradle is destined to be the top-level build system of this project
* default top-level IntelliJ module for blockchat left in place
* Java Gradle module blockchat-server created for server (groupid org.gnuyorkcity.blockchat, artifactid blockchat-server)


