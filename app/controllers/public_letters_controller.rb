class PublicLettersController < ApplicationController
    def index
        period = params[:period]
        if period == "all"
            public_letters = PublicLetter.all
        elsif period == "week"
            public_letters = PublicLetter.where("date >= ?", 1.week.ago)
        elsif period == "month"
            public_letters = PublicLetter.where("date >= ?", 1.month.ago)
        end
        #if public letters is empty, return empty array
        #order by date
        public_letters = public_letters.order(date: :desc)
        render json: public_letters, include: :user

    end

    def show
        public_letter = PublicLetter.find_by(id: params[:id])
        if public_letter
            render json: public_letter, include: :user
        else
            render json: {error: "Letter not found"}, status: :not_found
        end
    end

    def create
        params[:date] = Date.today
        params[:views] = 0
        params[:likes] = 0
        public_letter = PublicLetter.create(public_letter_params)
        if public_letter.valid?
            render json: public_letter, status: :created
        else
            render json: {errors: public_letter.errors.full_messages}, status: :unprocessable_entity

        end
    end

    def destroy
        public_letter = PublicLetter.find_by(id: params[:id])
        public_letter.destroy
        render json: public_letter, status: :no_content
    end
    


    def increment_likes

    end

    def increment_views

    end

    def public_letter_params
        params.permit(:text, :date, :views, :likes, :user_id)
    end


end
