class UserEntity < Grape::Entity
  expose :name
  expose :email
  expose :password
end
