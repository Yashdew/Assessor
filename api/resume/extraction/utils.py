import os


def getProjects():
    return "Projects TBC"


def getAchievements():
    return "Achievements TBC"


def getHobbies():
    return "Hobbies TBC"


def getLinks(links):
    urls = {
        "linkedin": None,
        "github": None,
        "leetcode": None,
        "codechef": None,
        "codeforces": None,
        "others": None,
    }
    github = list()
    others = list()
    for i in links["url"]:
        if "github" in i:
            github.append(i)
        elif "linkedin" in i:
            urls["linkedin"] = i
        elif "leetcode" in i:
            urls["leetcode"] = i
        elif "codechef" in i:
            urls["codechef"] = i
        elif "codeforces" in i:
            urls["codeforces"] = i
        else:
            others.append(i)
    urls["github"] = github
    urls["others"] = others
    return urls
