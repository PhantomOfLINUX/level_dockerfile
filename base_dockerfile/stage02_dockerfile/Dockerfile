FROM base_image:latest

ENV stage=stage02
ARG stage=stage02

RUN useradd -ms /bin/bash $stage

COPY start.sh /home/$stage

RUN chown $stage /home/$stage
WORKDIR /home/$stage

RUN echo | cat start.sh >> .bashrc
RUN rm -rf start.sh

RUN echo "$stage:0000" | chpasswd

RUN service ssh restart
RUN mkdir /home/$stage/.ssh
RUN chown $stage /home/$stage/.ssh
RUN chmod 700 /home/$stage/.ssh
RUN ssh-keygen -t rsa -C "" -N "" -f /home/$stage/.ssh/id_rsa
RUN touch /home/$stage/.ssh/authorized_keys
RUN chmod 600 /home/$stage/.ssh/authorized_keys
RUN chown $stage /home/$stage/.ssh/authorized_keys

#문제 작성
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

CMD ["/usr/sbin/sshd", "-D"]
