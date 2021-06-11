class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :comentable, polymorphic: true, index: true
      t.string :text

      t.timestamps null: false
    end
  end
end
