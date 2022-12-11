class PrivateLettersController < ApplicationController
    def index
        #check if user is logged in
        user = User.find_by(id: params[:id])
        # #if user is logged in
        # #return all private letters for that user where date is less than or equal to today
        if user
            #order by date
            private_letters = PrivateLetter.where("user_id = ? AND date <= ?", user.id, Date.today).order(date: :desc)
            render json: private_letters, include: :user
        else
            render json: {}
        end
    end

    def show
        private_letter = PrivateLetter.find_by(id: params[:id])
        if private_letter
            render json: private_letter, include: :user
        else
            render json: {error: "Letter not found"}, status: :not_found
        end
    end

    def create
        # private_letter = PrivateLetter.create!(private_letter_params)
        # render json: private_letter, status: :created

        user = User.find_by(id: params[:user_id])

        if user
            private_letter = PrivateLetter.create(private_letter_params)
            if private_letter.valid?
                render json: private_letter, status: :created
            else
                render json: {errors: private_letter.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "Unauthorized"}, status: :not_found
        end

    end



    def destroy
        private_letter = PrivateLetter.find_by(id: params[:id])
        private_letter.destroy
        render json: private_letter, status: :no_content
    end

    private

    def private_letter_params
        params.permit(:text, :date, :user_id)
    end

end
