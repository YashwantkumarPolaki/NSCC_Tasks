#include <stdio.h>
#include <string.h>

void quiz() {
    
    char *questions[] = {
        "What is the capital of France?",
        "Who developed the theory of relativity?",
        "Which planet is known as the Red Planet?",
        "What is the largest ocean on Earth?",
        "Who painted the Mona Lisa?"
    };

    
    char *options[][4] = {
        {"A) Berlin", "B) Madrid", "C) Paris", "D) Rome"},
        {"A) Isaac Newton", "B) Albert Einstein", "C) Nikola Tesla", "D) Galileo Galilei"},
        {"A) Venus", "B) Mars", "C) Earth", "D) Jupiter"},
        {"A) Atlantic Ocean", "B) Indian Ocean", "C) Arctic Ocean", "D) Pacific Ocean"},
        {"A) Vincent van Gogh", "B) Pablo Picasso", "C) Leonardo da Vinci", "D) Claude Monet"}
    };

  
    char *correct_answers[] = {"C", "B", "B", "D", "C"};
    
    int score = 0;
    char answer[2];  

  
    for (int i = 0; i < 5; i++) {
        printf("\nQuestion %d: %s\n", i+1, questions[i]);
        for (int j = 0; j < 4; j++) {
            printf("%s\n", options[i][j]);
        }
        
       
        printf("Your answer (A/B/C/D): ");
        scanf("%s", answer);

       
        if (strcmp(answer, correct_answers[i]) == 0) {
            score++;
        }
    }

   
    printf("\nYou scored %d out of 5.\n", score);
}

int main() {
    quiz();
    return 0;
}
