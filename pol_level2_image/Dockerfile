FROM ubuntu:latest

RUN apt-get update && apt-get install -y vim
RUN useradd -ms /bin/bash stage02
WORKDIR /home/stage02/stage02
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
RUN echo 'echo "STAGE 02"' >> ../.bashrc
RUN echo 'echo " "' >> ../.bashrc
RUN echo 'echo "You can learn [ cat ], [ grep ] and [ pipe ]"' >> ../.bashrc

RUN cat > file1.txt <<EOF
secret=l
sercet=q
sercet=e
secret=i
seoret=v
secrrt=z
seeret=i
secret=n
seccet=f
secrct=p
secret=u
sccert=e
secree=p
secret=x
EOF

USER stage02

CMD ["/bin/bash"]


