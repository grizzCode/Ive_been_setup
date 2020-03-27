### Add to ~/.bash_profile
> NOTE: If using zsh check here https://programmingzen.com/installing-rbenv-on-zsh-on-macos/
> we did this at beginning of class
```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```
### Managing versions
```
rbenv install -l	               List all available versions
rbenv install 2.5.1	             Install Ruby 2.5.1
rbenv uninstall                  2.5.1	Uninstall Ruby 2.5.1
rbenv versions	                 See installed versions
rbenv version	                   See current version
rbenv which <NAME>	             Display path to executable
rbenv rehash	                   Re-write binstubs
```
### Locally
* Application-specific version numbers are stored in .ruby-version.

Run commands in directory where project is located. 

Can specify / modify ruby version in Gemfile, then delete Gemlock file and ruby-version file in a rails project. Then run:
```
rbenv local 2.5.1	              Use Ruby 2.5.1 in project
rbenv local --unset	            Undo above
```
### Globally
* Global version numbers are stored in ~/.rbenv/version.
```
rbenv global 2.5.1	            Use Ruby 2.5.1 globally
rbenv global --unset	          Undo above
```
