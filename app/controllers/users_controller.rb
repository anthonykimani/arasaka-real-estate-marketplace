class UsersController < ApplicationController
    def index
      users = User.all
      render json: users, status: :ok
    end
  
    def show
      user = User.find_by(session[:user_id])
      if user
        render json: user, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    def create
      user = User.create!(user_params)
      render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages, state: false }, status: :unprocessable_entity
    end
  
    def update
      user = find_user
      user.update(user_params)
      render json: user
    end
  
    def destroy
      user = find_user
      user.destroy
      render json: user
    end
  
    private
  
    def find_user
      User.find_by(session[:user_id])
    end
  
    def user_params
      params.permit(:first_name, :last_name, :email, :password)
    end
  end
  