import PyPDF2
import pdfx 
from resume_parser import resumeparse

pdffileobj=open('C:/Users/Kulkarni/Desktop/Atharva Nitin Kulkarni resume.pdf','rb')
pdf = pdfx.PDFx("C:/Users/Kulkarni/Desktop/Atharva Nitin Kulkarni resume.pdf")
# data = resumeparse.read_file('C:/Users/Kulkarni/Desktop/Atharva Nitin Kulkarni resume.pdf')

#create reader variable that will read the pdffileobj
pdfreader=PyPDF2.PdfFileReader(pdffileobj)
 
#This will store the number of pages of this pdf file
x=pdfreader.numPages
 
#create a variable that will select the selected number of pages
pageobj=pdfreader.getPage(0)
 
#(x+1) because python indentation starts with 0.
#create text variable which will store all text datafrom pdf file
text=pageobj.extractText()

#print(text) 

#save the extracted data from pdf to a txt file
#we will use file handling here
#dont forget to put r before you put the file path
#go to the file location copy the path by right clicking on the file
#click properties and copy the location path and paste it here.
#put "\\your_txtfilename"

import nltk            

nltk.download('punkt')
sentences = nltk.sent_tokenize(text)
import re
corpus = []
for i in range(len(sentences)):
    review = re.sub('[^!^@^*^-^.^,^0-9a-z^A-Z]',' ',sentences[i])
    review = review.lower()
    review = review.split()
    review = ' '.join(review)
    corpus.append(review)
corpus


def listToString(s): 
    
    # initialize an empty string
    str1 = "" 
    
    # traverse in the string  
    for ele in s: 
        str1 += ele  
    
    # return string  
    return str1

strVar = listToString(corpus)

print(strVar)
# Extracting Links given in the resume.
print(pdf.get_references_as_dict())

# print(data)

import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp(strVar)

for ent in doc.ents:
    print(ent.text," ", ent.start_char," ", ent.end_char," ", ent.label_," ",)

# for chunk in doc.noun_chunks:
#     print(chunk.text, chunk.root.text, chunk.root.dep_,chunk.root.head.text)

file1=open(r"Resume Text.txt","a")
file1.writelines(strVar)
