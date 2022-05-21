# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.231.6/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# install gcloud command
RUN su - node -c "curl https://sdk.cloud.google.com > install.sh"
RUN su - node -c "bash install.sh --disable-prompts"
RUN su - node -c "rm install.sh"
RUN su - node -c "echo source /home/node/google-cloud-sdk/completion.bash.inc >> ~/.bashrc"
RUN su - node -c "echo source /home/node/google-cloud-sdk/path.bash.inc >> ~/.bashrc"

# firebase setup. if you create
RUN apt update && apt upgrade -y
RUN apt install -y openjdk-17-jdk-headless
RUN npm install -g firebase-tools
# COPY firebase.json /home/node/firebase.json
# RUN chown node /home/node/firebase.json
