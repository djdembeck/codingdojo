require 'rails_helper'
feature "User creates an account" do
	before(:each) do 
		visit new_user_path
	end
	scenario "successfully creates a new user account" do
		visit "/users/new"
		fill_in "user[first_name]", with: "shane"
		fill_in "user[last_name]", with: "chang"
		fill_in "user[email]", with: "schang@codingdojo.com"
		click_button "Create User"
		expect(page).to have_content "User added successfully"
	end
	scenario "unsuccessfully creates a new user account" do 
		click_button "Create User"
		expect(current_path).to eq(new_user_path)
	end
	scenario "doesn't fill out first name field" do 
		fill_in "user[last_name]", with: "chang"
		fill_in "user[email]", with: "schang@codingdojo.com"
		click_button "Create User"
		expect(page).to have_content "First name can't be blank"
	end
	scenario "doesn't fill out last name field" do
		fill_in "user[first_name]", with: "shane"
		fill_in "user[email]", with: "schang@codingdojo.com"
		click_button "Create User"
		expect(page).to have_content "Last name can't be blank"
	end
	scenario "doesn't fill out email field" do
		fill_in "user[first_name]", with: "shane"
		fill_in "user[last_name]", with: "chang"
		click_button "Create User"
		expect(page).to have_content "Email can't be blank"
	end
end