# Devise
[How-Tos For Devise](https://github.com/heartcombo/devise/wiki/How-Tos)
[Documentation](https://github.com/heartcombo/devise)


### Install Devise
```rails g devise:install```

```rails g devise user```

```rails db:migrate```


##### *Gemfile*
```gem "devise"```

##### *application_controller.rb*
```before_action :authenticate_user!```



### Devise Modules
Database Authenticatable
Encrypts and stores passwords in the database
Omniauthable
Multi-provider authentication
Confirmable
Email confirmation for account
Recoverable
Resets passwords and sends reset instructions
Registerable
Signs up users
Rememberable
Trackable
Tracks sign in count, ip address
Timeoutable
Expires sessions
Validatable
Lockable
Locks an account after a specified number of failed login attempts

### Devise Helpers
Here are just a few helper methods that Devise gives us:

current_user  =>  retrieves the current user record
user_signed_in?  =>  returns a boolean true if the user is signed in and false if the user is not signed in. 
user_session  =>  accesses the users session
One important thing to note here is these helper methods would change if instead of having our Devise model be our User model it was something else. Example: If our Devise model was a model called Admin; the helper methods would change as well. current_admin