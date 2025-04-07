#!/bin/sh -e
    
podman build -t hello-tailwind-with-global-variables-devenv -f devenv.Containerfile .

exec podman run -it --replace \
    --name hello-tailwind-with-global-variables-devenv \
    -p 3000:3000 \
    --hostname hello-tailwind-with-global-variables-devenv \
    -v claude-root-home:/root \
    -v ./:/mnt/hello-tailwind-with-global-variables-devenv/ \
    --workdir /mnt/hello-tailwind-with-global-variables-devenv \
    hello-tailwind-with-global-variables-devenv \
    sh -c "npm install && npm run dev -- --host & fish"
