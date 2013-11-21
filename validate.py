# encoding utf-8

import os

curr_dir = os.environ['TRAVIS_BUILD_DIR']
username = os.path.basename(os.path.dirname(curr_dir))

print username

dirs = ['1_poll', '2_quiz', '3_gallery']

workdir = dirs[ord(username[0]) % 3]

for dirname in dirs:
    if dirname == workdir:
        break
    if len(os.listdir(os.path.join(curr_dir, dirname))) > 1:
        raise Error("Not yours work")
