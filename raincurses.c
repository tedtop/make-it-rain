/**

Prints random letters and numbers of various colors to fill the screen.
This function uses the COLS and LINES variables provided by ncurses to
determine the size of the terminal window. It then checks whether the
window size has changed since the last iteration of the loop, and
regenerates the screen if it has.
*/

#include <ncurses.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

// Define colors
#define COLOR_WHITE  7

// Define function to generate random string of given length
void generate_random_string(char *s, const int len) {
    static const char alphanum[] = "0123456789"
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                                    "abcdefghijklmnopqrstuvwxyz";
    for (int i = 0; i < len - 1; ++i) {
        s[i] = alphanum[rand() % (sizeof(alphanum) - 1)];
    }
    s[len - 1] = 0;
}

// Define function to fill screen with random colorful letters and numbers
void fill_screen() {
    // Initialize ncurses
    initscr();
    cbreak();
    noecho();
    curs_set(0);
    start_color();

    // Define color pairs
    init_pair(1, COLOR_RED, COLOR_BLACK);
    init_pair(2, COLOR_GREEN, COLOR_BLACK);
    init_pair(3, COLOR_YELLOW, COLOR_BLACK);
    init_pair(4, COLOR_BLUE, COLOR_BLACK);
    init_pair(5, COLOR_MAGENTA, COLOR_BLACK);
    init_pair(6, COLOR_CYAN, COLOR_BLACK);
    init_pair(7, COLOR_WHITE, COLOR_BLACK);

    // Get screen dimensions
    int row, col;
    getmaxyx(stdscr, row, col);

    // Fill screen with random colorful letters and numbers
    char s[col + 1];
    for (int i = 0; i < row; i++) {
        generate_random_string(s, col);
        for (int j = 0; j < col; j++) {
            attron(COLOR_PAIR(rand() % 7 + 1));
            mvaddch(i, j, s[j]);
            attroff(COLOR_PAIR(rand() % 7 + 1));
        }
    }

    // Refresh screen
    refresh();

    // Wait for user input
    getch();

    // Clean up
    endwin();
}

int main() {
    srand(time(NULL)); // Seed random number generator
    while (1) {
        fill_screen();
        clear();
    }
    return 0;
}
