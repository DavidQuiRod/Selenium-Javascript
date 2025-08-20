FROM gitpod/workspace-full

# Instalar Node.js y npm
RUN apt-get update && apt-get install -y nodejs npm

# Copiar los archivos del proyecto
COPY . /workspace/my-project

# Establecer el directorio de trabajo
WORKDIR /workspace/my-project

# Instalar dependencias
RUN npm install

# Comando por defecto para iniciar el proyecto (puedes personalizarlo)
CMD ["npm", "start"]