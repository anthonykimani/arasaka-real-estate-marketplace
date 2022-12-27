class PurchasesController < ApplicationController
    def index
        purchases = Purchase.all
        render json: purchases
    end

    def show
        purchase = find_purchase
        render json: purchase
    end

    def create
        purchase = Purchase.create(purchase_params)
        render json: purchase
    end

    def update
        purchase = find_purchase
        purchase.update(purchase_params)
        render json: purchase
    end

    def destroy
        purchase = find_purchase
        purchase.destroy
        render json: purchase
    end

    private

    def find_purchase
        Purchase.find(params[:id])
    end

    def purchase_params
        params.permit(:user_id, :property_id, :name)
    end
end
