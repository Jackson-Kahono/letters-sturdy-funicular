class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
<<<<<<< HEAD
=======
      t.integer :phone_number
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
      t.string :password_digest

      t.timestamps
    end
  end
end
