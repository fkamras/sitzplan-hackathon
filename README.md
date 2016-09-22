# Vagrant for development
1. Start the VM with `vagrant up`
2. Log in on the machine with `vagrant ssh`
3. Change directory into the project's server folder and run the server with `cd /vagrant` and `mix phoenix.server`

To apply pending migrations run the command `mix ecto.migrate`.
