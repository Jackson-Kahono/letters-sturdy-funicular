#require 'bcrypt'
<<<<<<< HEAD
class User < ApplicationRecord
=======
class User < ApplicationRecord::Base
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
    #include Bcrypt

    has_many :public_letters, dependent: :destroy
    has_many :private_letters, dependent: :destroy

<<<<<<< HEAD
    # has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email





    #creating a password
    # def password
=======
    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email
    
    #creating a password
    # def password 
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
    #     @password || = Password.new(password_hash)
    # end

    # def password = (new_password)
    #     @password = Password.create(new_password)
    #     self.password_hash = @password
    # end

    #creating an account/signup
    # def create
    #     @user = User.new(params[:user])
    #     @user.password = params[:password]
    #     @user.save!
    # end

    #authenticating a user
    # def login
    #     @user = User.find_by_email(params[:email])
    #     if @user.password == params[:password]
    #         give_token
    #     else
    #         redirect_to_home_url
    #     end
    # end
<<<<<<< HEAD
    def authenticate(password)
        #bcrypt compare hash and password
        puts "password_digest: #{self.password_digest}"
        puts "password: #{password}"
        BCrypt::Password.new(self.password_digest) == password

    end
=======
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
end
