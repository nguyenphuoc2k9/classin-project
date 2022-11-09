import os
import msvcrt  # Windows
# import getch  # macOS
import random


# == DEFINE HELPER FUNCTIONS= ==

# generate game map with specified number of rows and columns
def generate_map(rows, cols):
  map = [['-']*cols for i in range(rows)]  # initialize empty map as a list of list
  map[0][0] = 'P'  # set player position at top left
  return map  # return map as a list of list

# generate a Key or Door, given the map from generate_map()
def generate_object(map, rows, cols, obj_char):
  while True:  # randomize a position until found an empty one
    r_K = random.randint(0, rows-1)  # generate random row coordinate
    c_K = random.randint(0, cols-1)  # generate random column coordinate
    if map[r_K][c_K] == '-':    # if found empty position
      map[r_K][c_K] = obj_char  # set object there
      break                     # break out of loop

# print the map with Player, Key and Door
def print_map(map, rows, cols):
  print()
  for r in range(rows):
    for c in range(cols):
      print(map[r][c], end=' ')
    print()

# move the player, given the map, current player's position and moving key
def move(map, rows, cols, ch, r_P, c_P):
  # rows, cols: number of rows and columns in map
  # ch: moving key
  # r_P, c_P: current row and column cooridinate of Player

  # calculate next position of Player, given current position (r_P, c_P) and moving key
  r_P_new = r_P  # initialize new position to be current position
  c_P_new = c_P
  if ch == 'W':    # UP => move player up 1 row, but not pass the first row
    r_P_new = max(0, r_P-1)
  elif ch == 'S':  # DOWN => move player down 1 row, but not pass the last row
    r_P_new = min(rows-1, r_P+1)
  elif ch == 'A':  # LEFT => move player left 1 column, but not pass the first column
    c_P_new = max(0, c_P-1)
  elif ch == 'D':  # RIGHT => move player right 1 column, but not pass the last column
    c_P_new = min(cols-1, c_P+1)
  
  # change the content of map
  value = map[r_P_new][c_P_new]  # record the content in the new position
  map[r_P][c_P] = '-'            # set the value of old Player's position to empty
  map[r_P_new][c_P_new] = 'P'    # set the value of new Player's position to 'P'

  # return new position and the value in new position
  return r_P_new, c_P_new, value


# == GENERATE MAP ==
ROWS = 5  # number of rows in map
COLS = 10  # number of columns in map
map = generate_map(ROWS, COLS)
generate_object(map, ROWS, COLS, 'K')
generate_object(map, ROWS, COLS, 'D')

# == INITIALIZE GAME STATE
r_P = 0  # starting row of Player
c_P = 0  # starting column of Player
found_key = False  # Player has not found Key yet

# == PRINT STARTING SCREEN ==
os.system('cls')  # clear screen in Windows
# os.system('clear')  # clear screen in macOS
print_map(map, ROWS, COLS)
print('\n== THE ESCAPE GAME ==')
print('Use W A S D to move (P)layer.')
print('Find (K)ey first then exit through the (D)oor.')

# == GAMEPLAY ==
while True:
  ch = msvcrt.getch().decode('utf-8').upper()  # Windows
  # ch = getch.getch().decode('utf-8').upper()  # macOS

  # move Player accordingly
  r_P, c_P, value = move(map, ROWS, COLS, ch, r_P, c_P)
  
  if value == 'K':  # if found Key => update game state
    found_key = True

  elif value == 'D':  # if found Door => update map, check winning then end the game

    os.system('cls')
    # os.system('clear')  # clear screen in macOS
    print_map(map, ROWS, COLS)

    if found_key:  # if Key has been found => user win
      print('YOU WON!!!')
    else:          # if Key has not been found => user lose
      print('YOU LOSE.')
      print('Maybe find the Key first?')
    break  # end the game

  # print the updated map after every move
  os.system('cls')
  # os.system('clear')  # clear screen in macOS
  print_map(map, ROWS, COLS)
# get user's key input without pressing Enter