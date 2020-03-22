DROP database IF EXISTS LanguagePlatform2;
CREATE database LanguagePlatform2;
USE LanguagePlatform2;

CREATE TABLE Users(
    Email varchar(30) NOT NULL,
    PasswordId TEXT NOT NULL,
    PRIMARY KEY (Email)
);

CREATE TABLE UserProfile(
    UserId Int NOT NULL,
    Email varchar(30) NOT NULL,
    UserFirstName TEXT NOT NULL,
    UserLastName TEXT NOT NULL,
    UserLocation TEXT NOT NULL, 
    LanguagetoLearn TEXT NOT NULL, 
    UserPhone varchar(20) NOT NULL, 
    MotherLanguage TEXT NOT NULL, 
    BirthDate TEXT NOT NULL, 
    Gender TEXT NOT NULL, 
    UserSkills TEXT NOT NULL,
    PRIMARY KEY (UserId),
    constraint UserProfile_Emailfk FOREIGN KEY (Email) REFERENCES Users(Email)

);


CREATE TABLE Offers(
    OfferId Int NOT NULL,
    CompanyName TEXT NOT NULL,
    LanguagetoParticipation TEXT NOT NULL,
    PersonCapacity TEXT NOT NULL,
    CompanyLocation TEXT NOT NULL, 
    WorkingTime TEXT NOT NULL, 
    CompanyPhone varchar(20) NOT NULL, 
    CompanySkills TEXT NOT NULL, 
    Descriptiontext TEXT NOT NULL, 
    PRIMARY KEY (OfferId)

);


INSERT INTO  Users (Email, PasswordId) VALUES ('ayseyilmaz@gmail.com', 'dfgaed');
INSERT INTO  Users (Email, PasswordId) VALUES ('ahmetbozkurt@gmail.com', 'dfsdghjd');
INSERT INTO  Users (Email, PasswordId) VALUES ('alidag@gmail.com', 'ikjtygd');
INSERT INTO  Users (Email, PasswordId) VALUES ('emineozturk@gmail.com', 'aderf');
INSERT INTO  Users (Email, PasswordId) VALUES ('aslibayrak@gmail.com', 'pyujh');
INSERT INTO  Users (Email, PasswordId) VALUES ('veliaslan@gmail.com', 'ruybf');
INSERT INTO  Users (Email, PasswordId) VALUES ('oyabaran@gmail.com', 'tpojhhgf');
INSERT INTO  Users (Email, PasswordId) VALUES ('incisuskun@gmail.com', 'itrgv');
INSERT INTO  Users (Email, PasswordId) VALUES ('yoncasimsek@gmail.com', 'awfhb');
INSERT INTO  Users (Email, PasswordId) VALUES ('aysedemirel@gmail.com', 'pyjnbd');
INSERT INTO  Users (Email, PasswordId) VALUES ('volkantoprak@gmail.com', 'rdjlt');
INSERT INTO  Users (Email, PasswordId) VALUES ('yunusdeniz@gmail.com', 'iyhhncdf');
INSERT INTO  Users (Email, PasswordId) VALUES ('dilarayildiz@gmail.com', 'erdfst');
INSERT INTO  Users (Email, PasswordId) VALUES ('deryadost@gmail.com', 'nmdfih');
INSERT INTO  Users (Email, PasswordId) VALUES ('mertkocaman@gmail.com', 'yljxo');



INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (1, 'ayseyilmaz@gmail.com', 'Ayse', 'Yilmaz', 'Duffel', 'Dutch', 9541, 'Turkish', '03.10.1990', 'Female', 'IT');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (2, 'ahmetbozkurt@gmail.com', 'Ahmet', 'Bozkurt', 'Gent', 'English', '', 'Dutch', '02.11.1986', 'Male', 'Media');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (3, 'alidag@gmail.com', 'Ali', 'Dag', 'Turnhout', 'Dutch', 9543, 'Turkish', '07.03.1973', 'Male', 'Sport');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (4, 'emineozturk@gmail.com', 'Emine', 'Ozturk', 'Mechelen', 'French', 9544, 'English', '15.07.1992', 'Female', 'Education');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (5, 'aslibayrak@gmail.com', 'Asli', 'Bayrak', 'Gent', 'English', 9545, '', '28.04.2001', '', 'Media');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (6, 'veliaslan@gmail.com', 'Veli', 'Aslan', 'Mechelen', 'English', 9546, 'Arabic', '01.10.2001', 'Male', 'IT');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (7, 'oyabaran@gmail.com', 'Oya', 'Baran', 'Antwerpen', 'Dutch', '', 'English', '17.05.1983', 'Female', 'Media');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (8, 'incisuskun@gmail.com', 'Inci', 'Suskun', 'Gent', 'French', 9548, 'Turkish', '12.06.1992', 'Female', 'Sport');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (9, 'yoncasimsek@gmail.com', 'Yonca', 'Simsek', 'Turnhout', 'English', 9549, 'Dutch', '24.08.1982', 'Female', 'Sport');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (10, 'aysedemirel@gmail.com', 'Ayse', 'Demirel', 'Antwerpen', 'Dutch', 9550, 'English', '20.10.1999', '', 'Education');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (11, 'volkantoprak@gmail.com', 'Volkan', 'Toprak', 'Duffel', 'Dutch', 9551, 'Arabic', '11.03.1990', 'Male', 'Transportation');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (12, 'yunusdeniz@gmail.com', 'Yunus', 'Deniz', 'Mechelen', 'French', 9552, 'Turkish', '08.09.2003', 'Male', 'Transportation');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (13, 'dilarayildiz@gmail.com', 'Dilara', 'Yildiz', 'Antwerpen', 'French', '', '', '14.05.1984', '', 'IT');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (14, 'deryadost@gmail.com', 'Derya', 'Dost', 'Mechelen', 'French', 9554, 'Dutch', '22.11.1987', 'Female', 'Sport');
INSERT INTO UserProfile (UserId, Email, UserFirstName, UserLastName, UserLocation, LanguagetoLearn, UserPhone, MotherLanguage, BirthDate, Gender, UserSkills) VALUES (15, 'mertkocaman@gmail.com', 'Mert', 'Kocaman', 'Mechelen', 'English', 9555, '', '27.12.1996', 'Male', 'IT');


INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (101, 'GAMMA', 'Dutch', 5, 'Duffel', '30days', 8112, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (102, 'FCR Media', 'English', 3, 'Gent', '7days', 8212, 'Media', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (103, 'Adidas', 'English', 10, 'Turnhout', '7days', 8311, 'Sport', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (104, 'GAMMA', 'English', 1, 'Gent', '60days', 8111, 'Sport', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (105, 'Colruyt', 'French', 20, 'Mechelen', '14days', 8411, 'Transportation', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (106, 'CRONOS', 'French', 5, 'Mechelen', '20days', 8511, 'Education', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (107, 'Colruyt', 'French', 3, 'Mechelen', '7days', 8411, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (108, 'FCR Media', 'Dutch', 5, 'Antwerpen', '30days', 8211, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (109, 'Adidas', 'English', 11, 'Antwerpen', '15days', 8312, 'Sport', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (110, 'FCR Media', 'English', 3, 'Gent', '5days', 8212, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (111, 'Colruyt', 'Dutch', 10, 'Duffel', '60days', 8412, 'Transportation', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (112, 'CRONOS', 'Dutch', 7, 'Antwerpen', '14days', 8512, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (113, 'GAMMA', 'English', 3, 'Gent', '40days', 8111, 'IT', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (114, 'Adidas', 'Dutch', 15, 'Antwerpen', '10days', 8312, 'Transportation', '...');
INSERT INTO Offers (OfferId, CompanyName, LanguagetoParticipation, PersonCapacity, CompanyLocation, WorkingTime, CompanyPhone, CompanySkills, Descriptiontext) VALUES (115, 'FCR Media', 'Dutch', 8, 'Antwerpen', '20days', 8211, 'Media', '...');
