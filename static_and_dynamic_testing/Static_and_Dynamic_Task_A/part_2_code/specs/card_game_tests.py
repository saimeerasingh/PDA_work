import unittest
from src.card import Card
from src.card_game import CardGame


class TestCardGame(unittest.TestCase):

    def test_check_for_ace_if_true(self):
        card = Card("heart",1)
        card_game = CardGame()
        assert card_game.check_for_ace(card) == True
    
    def test_check_for_ace_if_false(self):
        card = Card("heart",2)
        card_game = CardGame()
        assert card_game.check_for_ace(card) == False

    def test_can_check_for_larger_number_true(self):
        card1 = Card("spade", 5)
        card2 = Card("heart", 4)
        card_game = CardGame()
        assert card_game.highest_card(card1,card2) == card1

    def test_can_check_for_larger_number_false(self):
        card1 = Card("spade", 3)
        card2 = Card("heart", 4)
        card_game = CardGame()
        assert card_game.highest_card(card1,card2) == card2

    def test_for_total_cards(self):
        card1 = Card("spade", 3)
        card2 = Card("heart", 4)
        card_list = [card1,card2]
        card_game = CardGame()
        assert card_game.cards_total(card_list) == "You have a total of 7"

