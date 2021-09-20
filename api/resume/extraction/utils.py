import os


class Links:
    def __init__(self):
        self.urls = {
            "linkedin": str(),
            "leetcode": str(),
            "codechef": str(),
            "codeforces": str(),
            "github": list(),
            "others": list(),
        }


def getLinks(links: dict):
    tofind = ["github", "linkedin", "leetcode", "codechef", "codeforces"]
    link = Links()
    linkscopy = links['url'].copy()
    for string in tofind:
        if type(link.urls[string]) == list:
            for i in links['url']:
                if string in i:
                    link.urls[string].append(i)
                    linkscopy.remove(i)
        else:
            for i in links['url']:
                if string in i:
                    link.urls[string] = i
                    linkscopy.remove(i)

    link.urls["others"] = linkscopy
    return link.urls


def getProjects():
    return "Projects TBC"


def getAchievements():
    return "Achievements TBC"


def getHobbies():
    return "Hobbies TBC"
