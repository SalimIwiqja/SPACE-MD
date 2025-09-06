require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOxGJltTJgG1UQQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGAG5qBEdsYBoY3sDFFs35qGEAksuBVUFihP++wQ6PTMPu7O9PBVVGSdPnjyZ30BOMENvqAGjb6CguIYctUfeFAiMgFFFEaKgC0LIIRgBefnWKGvnVlixa6xc1ZJuB8ny41Iv39F8ktino3HVlhaRBi*g3gVFdUxx8AfASbM6O7A*7535bPU+F+cHh92uJ6taGtQpeoq86mhyORGhR17AvUWEmOI8tooTyhCF6Rtq1hDTz9HfLyiWFYb7Y9dHHJ4WTqo3+8HOa45+kc2dPMUYal6p5cLn6Aumy+KBLyXU3LnKmNa3RWCGZWA1Q0ZYI+sFt9N6299Z9pM+w3GOQjtEOce8+bTuwlJaFqKrGgN9NuN2py+Mfe91WMzh8awuNxWXDRvV8nkmOZ8jDhfBevza2UYz3Un2zErrTeBYguwvKjuQxJJQReRjWjeS8DvxNf3wSvJ*dHfsGVWlJKh9tS4qZkmRVKpptV1EnoCRLs*TWj*fBq4p6Z+jv94VioY8K9J5MhTsdalpaW2lethLyCnZZ7rTGBNDuhoPwB*0Ia*on1iq48tbrtuTZVX4Ys+dIpI0UzIp4kwRZ4tNKfgbYyjXU*+Ir+rtcBrH+mQbss5RypCRixd3v0ZiMDwcDqbJ5duYhTNiOi+PihLU2CEYifcuoCjGjFPIMcnbO3XQBTCsPRRQxB*qAtLZ9W7XDG+29syozgviHAovVCGKjKSjppf3SfMuq3GSZvEL6IKCkgAxhsJXzDihzQIxBmPEwOjvr12Qoyt*9q3N1he7IMKU8W1eFSmB4UdTPx5hEJAq516TB2Z7QBSMhF*XiHOcx6yVscohDU64RuYJcgZGEUwZ+lkgoigEI04r9HNoTRK2uosHeWMa3h50QfboBw7BCEiipAqKqAxkSRr1tb*Yl0sLC4viS4446IL0ESYONaUvKKrUHwykZ2T7cP*JsAUMEYc4ZWAEzHVkX6ljWusj1wbb6VRfxLoZ6+BXRR*OeEqvmZ4SC6pZK+qh1rTcn0ev8XCi7t1MFhy+9RypIvrpttuSl38AASOgL2zx*RgeOuWe2BbZm2F8Xnf2U1LBxV73j3qgqU4evCrbXd9*E0rTHdpknAqn2bvLo3LX0e3hYF4npVE7hK*KTIS+qb+02UJU4wD9nsycV5PFLjukvctqyRrRxkcxTrjPIrGnrJalv3PFcgWDiVdHRabhznWTng4rzX7zncWwcAtjWgbHswQ1S+yZTti*9W765enZx8ykP3YVftip7VX7G2H0GP0cth387949ibcWE+7d3zB+LJN*GUgDXZJqv1zFtIOyY6ejiF7*Kq9dlFmHamnNfStZ0lK3AzF9A*f71y4oUsgjQrN2w+UhJTgEXUBJ1XrWziPyh2SmvrWt+Fl5ChnXf83BBmeIcZgVYCRqiibKg6EkPaPWlBSvkJ1aEXxNK7etqRu9KDwO+cdYAb39rB0B9+9QSwECFAMUAAAICADsRiZbUyYBtVEEAABxBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '212605158422',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'SalimIwiqja',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 24682468,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 24682468,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
