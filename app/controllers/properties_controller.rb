class PropertiesController < ApplicationController
    def index
        properties = Property.all
        render json: properties
    end

    def show
        property = find_property
        render json: property
    end

    # def create
    #     property = 
    # end


    private

    def find_property
        Property.find(params[:id])
    end

    # def create_property
    #     params.permit()
    # end
end
