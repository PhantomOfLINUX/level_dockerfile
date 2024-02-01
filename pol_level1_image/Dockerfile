FROM ubuntu:latest

RUN apt-get update && apt-get install -y vim
RUN useradd -ms /bin/bash stage01
WORKDIR /home/stage01/level01
RUN echo 'echo "Welcome to POL"' >> ../.bashrc
RUN echo 'echo " "' >> ../.bashrc
RUN echo 'echo " ________  ________  ___ "' >> ../.bashrc
RUN echo 'echo "|\   __  \|\   __  \|\  \ "' >> ../.bashrc
RUN echo 'echo "\ \  \|\  \ \  \|\  \ \  \ "' >> ../.bashrc
RUN echo 'echo " \ \   ____\ \  \ \  \ \  \ "' >> ../.bashrc
RUN echo 'echo "  \ \  \___|\ \  \_\  \ \  \____  "' >> ../.bashrc
RUN echo 'echo "   \ \__\    \ \_______\ \_______\ "' >> ../.bashrc
RUN echo 'echo "    \|__|     \|_______|\|_______| "' >> ../.bashrc
RUN echo 'echo " "' >> ../.bashrc
RUN echo 'echo "STAGE 01"' >> ../.bashrc
RUN echo 'echo " "' >> ../.bashrc
RUN echo 'echo "You can learn [ ls ] and [ option ]"' >> ../.bashrc

RUN touch test_file1.txt
RUN touch .hidden_test_file1.txt

USER stage01

CMD ["/bin/bash"]
