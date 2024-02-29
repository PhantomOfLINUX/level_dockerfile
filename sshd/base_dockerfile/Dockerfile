FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssh-server vim
RUN mkdir /run/sshd

RUN service ssh start
RUN sed -i 's/^#AuthorizedKeysFile/AuthorizedKeysFile/' /etc/ssh/sshd_config
RUN sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config
