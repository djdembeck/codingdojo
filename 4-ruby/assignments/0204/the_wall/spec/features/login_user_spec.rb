require 'rails_helper'
feature "User creates an account" do
	before(:each) do 
		visit new_user_path
	end
	scenario "successfully creates a new user account" do
		visit "/users/new"
		fill_in "user[username]", with: "lollolol"
		click_button "Log In"
		expect(current_path).to eq(posts_path)
		expect(page).to have_content "User added successfully"
	end
	scenario "doesn't fill out username field" do
		click_button "Log In"
		expect(current_path).to eq(new_user_path)
		expect(page).to have_content "Username can't be blank"
	end
	scenario "doesn't use enough chars in username field" do
		fill_in "user[username]", with: "lol"
		click_button "Log In"
		expect(current_path).to eq(new_user_path)
		expect(page).to have_content "Username is too short"
	end
end