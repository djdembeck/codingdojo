require "spec_helper"
RSpec.describe Stringer do
	it "concatenates undefined number of strings with a space" do 
		expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
	end

	it "reduces or returns string to paramter length" do
		expect(Stringer.minify "hello world", 4).to eq("hello...")
	end

	it "iterates over a string and replaces each instance of that word with the replacement provided" do
		expect(Stringer.replacify "I can't do this", "can't", "can").to eq("I can do this")
	end

	it "iterates over a string and adds each word into an array, then returns that array" do
		expect(Stringer.tokenize "I love to code").to eq(["I", "love", "to", "code"])
	end

	it "iterates over a string and adds each word into an array, then returns that array" do
		expect(Stringer.removify "I'm not a developer", "not").to eq("I'm a developer")
	end
end