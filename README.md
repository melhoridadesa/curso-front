# curso-front
Configurando o virtual host

Primeiro abra o arquivo host digitando
sudo vi /etc/hosts

Inclua a linha abaixo
127.0.0.1  melhoridade.com.br
 
Apos incluir a linha, aperte esc, depois :wq (dois pontos q) e na sequencia aperte Enter.

Navegue ate a pasta sites-avalaible

cd /etc/apache2/sites-available

Copie o arquivo padrao e renomeio para melhoridade.conf

cp 000-default.conf melhoridade.conf

Abra o arquivo que melhoridade.conf e apague o conteudo .

sudo vi melhoridade.conf

Apos apagar o conteudo, cole o codigo abaixo.

<VirtualHost *:80>
    ServerName melhoridade.com.br
    DocumentRoot /var/www/curso-front
</VirtualHost>

Aperte esc e depois :wq e Enter para confirmar

Digite 
sudo su

Digite 
a2ensite melhoridade.conf

Agora reinicie o apache com o codigo abaixo.
service apache2 reload

Acesse a url melhoridade.com.br 
