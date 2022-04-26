ARG VARIANT=18-bullseye
FROM node:${VARIANT} as build

ENV NODE_ENV=production

COPY . /home/node/
RUN mv /home/node/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh

RUN chown -R node /home/node

USER node

WORKDIR /home/node

RUN npm install --production
RUN npm run build

# nextは勝手に環境変数PORTを探して、そのPORT番号を使うので特に
# 環境変数の値はいじらなくて良い。

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["run", "start"]
