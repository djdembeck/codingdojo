require "stringer/version"

module Stringer
	def self.spacify *strings
		string = ""
		strings.each_with_index do |s, i|
			if i >= 1
				string += " " + s
			else
				string += s
			end
		end
		string
	end

	def self.minify string, length
		if string.length == length
			string
		else
			trimmed_str = ""
			string.each_char.with_index do |s, i|
				if i <= length
					trimmed_str += s
				end
			end
			"#{trimmed_str}..."
		end
	end

	def self.replacify string, target, replacement
		word_split = string.split
		word_split.each_with_index do |s, i|
			if s == target
				word_split[i] = replacement				
			end
		end
		word_split.join ' '
	end

	def self.tokenize string
		string.split
	end

	def self.removify string, remove
		word_split = string.split
		new_str = ""
		word_split.each_with_index do |s, i|
			if s != remove
				if i > 0
					new_str += " "
				end
				new_str += s
			end
		end
		new_str
	end
end
