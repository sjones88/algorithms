# Given an array of available monetary denominations
# and an unlimited supply of those denominations,
# write a method that will return the number of ways to make change.

def make_change(n)
	def change(amount, denoms, index)
		return 1 if index >= denoms.length
		current_denom = denoms[index]
		ways = 0
		i = 0
		while i * current_denom <= amount
			amount_remaining = amount - i * current_denom
			ways += change(amount_remaining, denoms, index + 1)
			i += 1
		end
		ways
	end
	denoms = [100, 20, 10, 5, 2, 1]
	change(n, denoms, 0)
end

puts make_change(6)