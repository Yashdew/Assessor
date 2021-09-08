import os

def allowedFile(fileName):
    if fileName.endswith('.pdf'):
        return True 

def getProjects():
    return "Projects TBC"

def getAchievements():
    return "Achievements TBC"

def getHobbies():
    return "Hobbies TBC"        

def getLinks(links):
    urls = {
        "Linkedin" : None,
        "Github" : None,
        "Leetcode" : None,
        "Codechef" : None,
        "Codeforces" : None,
        "Others" : None,
    }
    github = list()
    others = list()
    for i in links["url"]:
        if "github" in i:
            github.append(i)
        elif "linkedin" in i:
            urls["Linkedin"] = i    
        elif "leetcode" in i:
            urls["Leetcode"] = i
        elif "codechef" in i:
            urls["Codechef"] = i
        elif "codeforces" in i:
            urls["Codeforces"] = i
        else:
            others.append(i)
    urls["Github"] = github    
    urls["Others"] = others                 
    return urls  
