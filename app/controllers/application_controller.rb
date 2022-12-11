class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_response

    #skip_before_action :verify_authenticity_token
<<<<<<< HEAD

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

=======
    
    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
    
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
    # handle invalid instance
    def handle_invalid_response(exeption)
        render json: {errors: exeption.record.errors.full_messages}, status: :unprocessable_entity
    end

end
