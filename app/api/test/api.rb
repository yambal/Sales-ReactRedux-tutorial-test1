module Test
  class API < Grape::API
    format :json

    resource :api do
      desc "Return Hello"
      get :all do
        @user = User.all
        {user:@user}
        #{message: "Hello Grape"}
      end
    end
  end
end
