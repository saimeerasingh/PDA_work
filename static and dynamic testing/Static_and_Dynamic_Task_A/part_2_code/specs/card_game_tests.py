import unittest
from src.card import Card
from src.card_game import check_for_ace

class TestCardGame(unittest.TestCase):

    def test_check_for_ace_if_true(self):
        card = Card("heart",1)
        assert check_for_ace(card) == True
    
    def test_check_for_ace_if_false(self):
        card = Card("heart",2)
        assert check_for_ace(card) == False


    
