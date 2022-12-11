class UsersController < ApplicationController
    def index
        render json: User.all
    end

    #Handle auto-login by implementing a `GET /me` route.
    def show
        user = User.find_by(id: session[:user_id]);
        if user
            render json: user, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def login
        user = User.find_by(name: params[:name]);
        if user && user.authenticate(params[:password_digest])
            session[:user_id] = user.id;
            render json: user, status: :created
        else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end

    #Handle sign up by implementing a `POST /signup` route.
    def create
        #bcrypt password
        params[:password_digest] = password(params[:password_digest])
        user = User.create(user_params)

        if user.valid?
            session[:user_id] = user.id;
            render json:user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: user, status: :no_content
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:name, :email, :password_digest)
    end

    def find_user
        User.find(params[:id])
    end

     #hash password
     def password(password)
        BCrypt::Password.create(password)
     end


end
