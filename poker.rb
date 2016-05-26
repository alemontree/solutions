class Card
    @@value_dict = {
        T: 10,
        J: 11,
        Q: 12,
        K: 14,
        A: 15
    }
    attr_reader :value
    attr_reader :suit

    def initialize(str)
        @rank = str[0]
        @suit = str[1]
        @value =  @rank.to_i == 0 ? @@value_dict[@rank.to_sym] : @rank.to_i
    end

    def display_card
        puts "Rank: #{@rank}, Suit: #{@suit}, Value is #{@value}"
    end
end

class Hand
    def initialize(str)
        @arr = str.split(" ")
        puts @arr
        @hand = []
        @arr.each {|x| @hand.push(Card.new(x)) }
        @hand.sort! {|x, y| x.value <=> y.value }
    end

    def show_hand
        @hand.each {|x| x.display_card}
    end

    def is_flush?
        flush_indicator = false
        suit = @hand[0].suit
        suit_counter = 1
        @hand[1..-1].each {|x|
            if x.suit == suit
                suit_counter += 1
            else
                suit = x.suit
                suit_counter = 1
            end
        }
        flush_indicator = true if suit_counter >= 4
        return flush_indicator

    end

end


c1 = Card.new("KC")
c2 = Card.new("AC")

# c1.display_card
# c2.display_card

h1 = Hand.new("8S TC KC 9S 4S")
h1.show_hand
puts "Flush? #{h1.is_flush?}"
