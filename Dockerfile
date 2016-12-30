FROM centos:latest

ENV APP_DIR /usr/src/app

# Update the system
RUN yum install epel-release -y \
	&& yum update -y \
  && yum install -y nodejs \
  && yum clean all

# Setup the needed tools
RUN npm install -g ionic cordova

# Create an user with limited access.
RUN useradd -d${APP_DIR} -s/sbin/nologin -m govithub

VOLUME ${APP_DIR}
WORKDIR ${APP_DIR}

RUN chown -R govithub:govithub ${APP_DIR}

USER govithub
