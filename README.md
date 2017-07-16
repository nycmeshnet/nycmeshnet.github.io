# nycmeshnet.github.io

Our website [https://nycmesh.net]()

# How its built

The site is run on [jekyll](jekyllrb.net), hosted by github

To test locally, `gem install jekyll`, and `jekyll serve`

# Slackin

Slackin is a weird workaround to get around the fact that slack
doesn't like open communities. Its a user, pretending to be a bot.

The user is called @slackin, and email is slackin@[our domain]

The backend and frontend code is a [now.sh]() deployment, ran by [@jedahan](https://github.com/jedahan)

Domain name TXT records control the slack.nycmesh.net subdomain pointing to this instance, so it can be changed over by anyone with control over the DNS records.
