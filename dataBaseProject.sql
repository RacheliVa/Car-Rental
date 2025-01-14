USE [master]
GO
/****** Object:  Database [BRcarProject]    Script Date: 15/07/2019 10:37:00 ******/
CREATE DATABASE [BRcarProject]
 go
USE [BRcarProject]
GO
/****** Object:  Table [dbo].[Cars]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Cars](
	[carID] [int] IDENTITY(1,1) NOT NULL,
	[onerID] [int] NOT NULL,
	[yearProduce] [int] NULL,
	[model] [varchar](20) NULL,
	[numSeats] [int] NULL,
	[babySeat] [bit] NULL,
	[priceForHour] [int] NULL,
	[discription] [varchar](50) NULL,
	[handicappedCar] [bit] NULL,
 CONSTRAINT [PK_Cars] PRIMARY KEY CLUSTERED 
(
	[carID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[constantRent]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[constantRent](
	[rentID] [int] IDENTITY(1,2) NOT NULL,
	[carID] [int] NULL,
	[location] [varchar](50) NULL,
	[state] [int] NULL,
	[hourFrom] [varchar](10) NULL,
	[hourTo] [varchar](10) NULL,
	[daysID] [int] NULL,
 CONSTRAINT [PK_constantRent] PRIMARY KEY CLUSTERED 
(
	[rentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[disposableRent]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[disposableRent](
	[rentID] [int] IDENTITY(2,2) NOT NULL,
	[carID] [int] NULL,
	[gas] [bit] NULL,
	[location] [varchar](50) NULL,
	[state] [int] NULL,
	[dateFrom] [date] NULL,
	[dateTo] [date] NULL,
	[hourFrom] [varchar](10) NULL,
	[hourTo] [varchar](10) NULL,
	[minPercentageForRent] [int] NULL,
 CONSTRAINT [PK_disposableRent] PRIMARY KEY CLUSTERED 
(
	[rentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[groupAtribution]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[groupAtribution](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[groupID] [int] NULL,
	[userID] [int] NULL,
 CONSTRAINT [PK_groupAtribution] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Groups]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Groups](
	[groupID] [int] IDENTITY(1,1) NOT NULL,
	[groupName] [varchar](20) NULL,
	[groupManagerID] [int] NULL,
	[maxPriceForHour] [int] NULL,
 CONSTRAINT [PK_Groups] PRIMARY KEY CLUSTERED 
(
	[groupID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LoginRequests]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LoginRequests](
	[requestID] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](20) NULL,
	[firstName] [varchar](20) NULL,
	[lastName] [varchar](20) NULL,
	[phoneNumber] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[password] [varchar](20) NULL,
	[groupName] [varchar](20) NULL,
 CONSTRAINT [PK_LoginRequests] PRIMARY KEY CLUSTERED 
(
	[requestID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[NotAllowForUser]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NotAllowForUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NULL,
	[notAllowUser] [int] NULL,
 CONSTRAINT [PK_NotAllowForUser] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Orders]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Orders](
	[orderID] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NULL,
	[startDate] [date] NULL,
	[endDate] [date] NULL,
	[startHour] [varchar](20) NULL,
	[endHour] [varchar](20) NULL,
	[numseats] [int] NULL,
	[numHours] [int] NULL,
	[rentID] [int] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[orderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Users]    Script Date: 15/07/2019 10:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[userID] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](20) NULL,
	[firstName] [varchar](20) NULL,
	[lastName] [varchar](20) NULL,
	[phoneNumber] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[password] [varchar](20) NULL,
	[administrator] [bit] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Cars] ON 

GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (5, 2, 2, N'  bbv', NULL, NULL, 2, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (6, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (7, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (8, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (9, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (10, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (11, 2, 0, N'', NULL, NULL, 0, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (12, 2, 2, N'kkk', NULL, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (13, 2, 2, N'kkk', NULL, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (14, 2, 2, N'kkk', NULL, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (17, 1, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (18, 1, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (19, 1, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (20, 1, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (21, 1, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (22, 3, 3, N'oo', NULL, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (1046, 21, 2019, N'OOO', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (1056, 16, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2060, 4, 2000, N'0ןחו9', 5, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2061, 21, 2000, N'tryxh', NULL, NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2062, 4, 2019, N'mersedes', 5, NULL, NULL, N' מאד חדש ושמור', NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2063, 1026, 2000, N'volvo', 5, NULL, NULL, N'גדוללל!!', NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2064, 1026, 2403, N'OOO', 7, NULL, NULL, N'גכאייל', NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2065, 1030, 2000, N'IIII', 5, NULL, NULL, N'בכעחסע', NULL)
GO
INSERT [dbo].[Cars] ([carID], [onerID], [yearProduce], [model], [numSeats], [babySeat], [priceForHour], [discription], [handicappedCar]) VALUES (2066, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Cars] OFF
GO
SET IDENTITY_INSERT [dbo].[constantRent] ON 

GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (1, 14, N'deee', NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (3, 14, N'deee', NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (7, 14, N'deee', NULL, NULL, NULL, NULL)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (15, 2060, N'street', NULL, N'{12:30}', N'{12:30}', 8)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (17, 2060, NULL, NULL, N'{12:0}', N'{22:0}', 4)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (19, 2060, NULL, NULL, NULL, NULL, 4)
GO
INSERT [dbo].[constantRent] ([rentID], [carID], [location], [state], [hourFrom], [hourTo], [daysID]) VALUES (21, 2062, N'jjjjjjjjjjj', NULL, NULL, NULL, 2)
GO
SET IDENTITY_INSERT [dbo].[constantRent] OFF
GO
SET IDENTITY_INSERT [dbo].[disposableRent] ON 

GO
INSERT [dbo].[disposableRent] ([rentID], [carID], [gas], [location], [state], [dateFrom], [dateTo], [hourFrom], [hourTo], [minPercentageForRent]) VALUES (88, NULL, NULL, N'sh', NULL, CAST(0xDD3F0B00 AS Date), CAST(0xE93F0B00 AS Date), NULL, NULL, NULL)
GO
INSERT [dbo].[disposableRent] ([rentID], [carID], [gas], [location], [state], [dateFrom], [dateTo], [hourFrom], [hourTo], [minPercentageForRent]) VALUES (90, 2060, NULL, NULL, NULL, CAST(0xDC3F0B00 AS Date), CAST(0xDD3F0B00 AS Date), N'{12:0}', N'{12:0}', NULL)
GO
INSERT [dbo].[disposableRent] ([rentID], [carID], [gas], [location], [state], [dateFrom], [dateTo], [hourFrom], [hourTo], [minPercentageForRent]) VALUES (92, 1046, NULL, NULL, NULL, CAST(0xE23F0B00 AS Date), CAST(0xEB3F0B00 AS Date), N'{12:0}', N'{12:0}', NULL)
GO
INSERT [dbo].[disposableRent] ([rentID], [carID], [gas], [location], [state], [dateFrom], [dateTo], [hourFrom], [hourTo], [minPercentageForRent]) VALUES (94, 2062, 0, N'sgjjjsfgjsfg', NULL, CAST(0xE03F0B00 AS Date), CAST(0xE43F0B00 AS Date), N'{12:30}', N'{19:18}', 70)
GO
INSERT [dbo].[disposableRent] ([rentID], [carID], [gas], [location], [state], [dateFrom], [dateTo], [hourFrom], [hourTo], [minPercentageForRent]) VALUES (96, 2060, 0, N'ypopioi', NULL, CAST(0xE53F0B00 AS Date), CAST(0x2C440B00 AS Date), N'{16:20}', N'{21:10}', 100)
GO
SET IDENTITY_INSERT [dbo].[disposableRent] OFF
GO
SET IDENTITY_INSERT [dbo].[groupAtribution] ON 

GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (16, 3, 11)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (17, 3, 12)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (18, 3, 13)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (19, 3, 14)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (20, 3, 15)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (24, 1, 1028)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (28, 1, 1026)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (29, 1, 1033)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (34, 1, 1038)
GO
INSERT [dbo].[groupAtribution] ([ID], [groupID], [userID]) VALUES (37, 1, 4)
GO
SET IDENTITY_INSERT [dbo].[groupAtribution] OFF
GO
SET IDENTITY_INSERT [dbo].[Groups] ON 

GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (1, N'קבוצה 1', 21, 30)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (2, N'קבוצה 2', 22, 10)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (3, N'קבוצה 3', 1, 100)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (4, N'', 1, 0)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (5, N'eee', NULL, 50)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (6, N'newGroup', 1048, 50)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (7, N'ttttt', 1048, 50)
GO
INSERT [dbo].[Groups] ([groupID], [groupName], [groupManagerID], [maxPriceForHour]) VALUES (8, N'newGroup', 1048, 59)
GO
SET IDENTITY_INSERT [dbo].[Groups] OFF
GO
SET IDENTITY_INSERT [dbo].[LoginRequests] ON 

GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (15, N'בת שבע גליס', N'גכ', N'געי', N'4646464646', N'a@gmail.com', N'בת שבע גליס', N'estg')
GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (16, N'תמר ליטמן', N'תמר', N'ליטמן', N'0583201292', N'tl@gmail.com', N'תמר ליטמן', N'2')
GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (23, N'שירה ישראלי', N'שירה', N'ישראלי', N'0544444444', N'shira@gmail.com', N'שירה ישראלי', N'קבוצה 2')
GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (24, N'מרים איכארן', N'מרים', N'איכארן', N'0504163454', N'mmusic3454@gmail.com', N'מרים איכארן', N'קבוצה 2')
GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (25, N'שרי הירשמן', N'שרי', N'הירשמן', N'0566666666', N's@gmail.com', N'שרי הירשמן', N'קבוצה 2')
GO
INSERT [dbo].[LoginRequests] ([requestID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [groupName]) VALUES (26, N'חני שלנגר', N'חני', N'שלנגר', N'0577777777', N'c@gmail.com', N'חני שלנגר', N'קבוצה 3')
GO
SET IDENTITY_INSERT [dbo].[LoginRequests] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1, N'aknv', NULL, NULL, N'jkgfsdh', NULL, N'hdsgfd', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (2, N'שלום', NULL, NULL, N'111', NULL, N'שלום', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (3, N'ברכה', NULL, NULL, N'222', NULL, N'ברכה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (4, N'בת שבע גליס', N'בת שבע ', N'גליס', N'0527178046', N'batsheva.gelis@gmail.com', N'בת שבע גליס', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (5, N'שלמה כץ', N'שלמה כץ', N'שלמה כץ', N'333', N'333', N'שלמה כץ', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (6, N'שלמה לוי', N'שלמה לוי', N'שלמה לוי', N'333', N'3333', N'שלמה לוי', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (7, N'חיה שרה', N'חיה שרה', N'חיה שרה', N'333', N'4444444', N'חיה שרה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (8, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (9, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'11111111', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (10, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (11, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (12, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (13, N'שלמה', N'שלמה', N'שלמה', N'', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (14, N'שלמה', N'שלמה', N'שלמה', N'333', N'שלמה', N'שלמה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (15, N'חיים', N'חיים', N'חיים', N'444', N'חיים', N'חיים', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (16, N'דוד', N'דוד', N'דוד', N'444', N'דוד', N'דודדוד', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (17, N'ברכה', N'ברכה', N'ברכה', N'111', N'ברכה', N'ברכה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (18, N'חיה', N'חיה', N'חיה', N'666', N'חיה', N'חיה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (19, N'שרה', N'שרה', N'שרה', N'777', N'שרה', N'שרה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (20, N'111', N'111', N'11', N'111', N'11', N'111', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (21, N'רחלי ליטמן', NULL, NULL, NULL, NULL, N'רחלי ליטמן', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (22, N'יוסף כהן', N'יוסף כהן', N'יוסף כהן', N'1111111', N'11111111', N'יוסף כהן', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1022, N'מורה', N'גב''', NULL, N'0000', N'teacher@gmail.com', N'מורה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1023, N'1234', N'1234', N'1234', N'1234', N'rr@gmail.com', N'123456', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1024, N'רחלי', N'רחלי', N'גולובנציץ', N'0000', N'rg@gmail.com', N'רחלי גולו', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1025, N'שירה ישראלי', N'שירה', N'ישראלי', N'0504146152', N'shira@gmail.com', N'שירה ישראלי', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1026, N'רחלי גייל', N'רחלי', N'גייל', N'0533103765', N'racheli@gmail.com', N'רחלי גייל', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1027, N'נחמי קסטנר', N'נחמי', N'קסטנר', N'050000000', N'n@gmail.com', N'נחמי קסטנר', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1028, N'לאה מרגליות', N'לאה', N'מרגליות', N'0566666666', N'l@gmail.com', N'לאה מרגליות', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1029, N'מרים איכארן', N'מרים', N'איכארן', N'0504163454', N'm@gmail.com', N'מרים איכארן', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1030, N'שירה ישראלי', N'שירה', N'ישראלי', N'6588888888', N's@gmail.com', N'שירה ישראלי', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1031, N'נחמי קסטנר', N'נחמי קסטנר', N'נחמי קסטנר', N'0583201292', N'n@gmail.com', N'נחמי קסטנר', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1032, N'רחלי גייל', N'רחלי גייל', N'רחלי גייל', N'0583201292', N'n@gmail.com', N'רחלי גייל', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1033, N'רחלי גולובנציץ', N'רחלי', N'גולו', N'0583201292', N'n@gmail.com', N'רחלי גולובנציץ', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1034, N'אא', N'אא', N'בב', N'1111111111', N'n@gmail.com', N'אאאאאא', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1035, N'אא', N'אא', N'בב', N'1111111111', N'n@gmail.com', N'אאאאאא', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1036, N'גגגגגגגגגגג', N'גג', N'גגגגגגגגגגג', N'3333333333', N'n@gmail.com', N'גגגגגגגגגגגג', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1037, N'דדדדדדדדדדדד', N'דדדדדדד', N'דדדדדדדדדדדד', N'5555555555', N'n@gmail.com', N'דדדדדדדדדדדדד', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1038, N'שושנה פינקלשטיין', N'שוש', N'פנקלשטיין', N'0548574585', N'n@gmail.com', N'1235714', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1039, N'הההההההההההההההההההה', N'ההההההההה', N'ההההההה', N'6666666666', N'n@gmail.com', N'ההההההההההההההה', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1040, N'שרי הירשמן', N'שרי', N'הירשמן', N'0504141978', N'n@gmail.com', N'שרי הירשמן', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1041, N'חני שלנגר', N'חני', N'שלנגר', N'0583256533', N'chani.ss533@gmail.com', N'userName', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1042, N'חני שלנגר', N'חני', N'שלנגר', N'5555555555', N'chani.ss533@gmail.com', N'חני שלנגר', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1043, N'חני שלנגר', N'חני', N'שלנגר', N'5555555555', N'chani.ss533@gmail.com', N'חני שלנגר', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1044, N'חני שלנגר', N'חני', N'שלנגר', N'5555555555', N'chani.ss533@gmail.com', N'חני שלנגר', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1045, N'חני שלנגר', N'חני', N'שלנגר', N'5555555555', N'chani.ss533@gmail.com', N'חני שלנגר', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1046, N'חני שלנגר', N'חני', N'שלנגר', N'5555555555', N'chani.ss533@gmail.com', N'חני שלנגר', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1047, N'בת שבע גליס', N'בת שבע', N'גליס', N'0527178046', N'batsheva.gelis@gmail.com', N'בת שבע גליס', 0)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1048, N'aaaaaaaa', N'aaa', N'aaaa', N'1111111111', N'aa@gmail.com', N'aaaaaa', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1049, N'aaaaaaaa', N'aaaaa', N'aaaaa', N'1111111111', N'aa@gmail.com', N'aaaaaa', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1050, N'aaaaaaaa', N'ggg', N'gg', N'4444444444', N'nd@gmail.com', N'aaaaaa', 1)
GO
INSERT [dbo].[Users] ([userID], [userName], [firstName], [lastName], [phoneNumber], [email], [password], [administrator]) VALUES (1051, N'aaaaaaaa', N'wwwww', N'wwwwwwwwww', N'3333333333', N'aa@gmail.com', N'aaaaaa', 1)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_administrator]  DEFAULT ((0)) FOR [administrator]
GO
ALTER TABLE [dbo].[constantRent]  WITH CHECK ADD  CONSTRAINT [FK_constantRent_Cars] FOREIGN KEY([carID])
REFERENCES [dbo].[Cars] ([carID])
GO
ALTER TABLE [dbo].[constantRent] CHECK CONSTRAINT [FK_constantRent_Cars]
GO
ALTER TABLE [dbo].[disposableRent]  WITH CHECK ADD  CONSTRAINT [FK_disposableRent_Cars] FOREIGN KEY([carID])
REFERENCES [dbo].[Cars] ([carID])
ON UPDATE SET DEFAULT
ON DELETE SET DEFAULT
GO
ALTER TABLE [dbo].[disposableRent] CHECK CONSTRAINT [FK_disposableRent_Cars]
GO
ALTER TABLE [dbo].[groupAtribution]  WITH CHECK ADD  CONSTRAINT [FK_groupAtribution_Groups] FOREIGN KEY([groupID])
REFERENCES [dbo].[Groups] ([groupID])
GO
ALTER TABLE [dbo].[groupAtribution] CHECK CONSTRAINT [FK_groupAtribution_Groups]
GO
ALTER TABLE [dbo].[groupAtribution]  WITH CHECK ADD  CONSTRAINT [FK_groupAtribution_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([userID])
GO
ALTER TABLE [dbo].[groupAtribution] CHECK CONSTRAINT [FK_groupAtribution_Users]
GO
ALTER TABLE [dbo].[Groups]  WITH CHECK ADD  CONSTRAINT [FK_Groups_Users] FOREIGN KEY([groupManagerID])
REFERENCES [dbo].[Users] ([userID])
GO
ALTER TABLE [dbo].[Groups] CHECK CONSTRAINT [FK_Groups_Users]
GO
ALTER TABLE [dbo].[NotAllowForUser]  WITH CHECK ADD  CONSTRAINT [FK_NotAllowForUser_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([userID])
GO
ALTER TABLE [dbo].[NotAllowForUser] CHECK CONSTRAINT [FK_NotAllowForUser_Users]
GO
ALTER TABLE [dbo].[NotAllowForUser]  WITH CHECK ADD  CONSTRAINT [FK_NotAllowForUser_Users1] FOREIGN KEY([notAllowUser])
REFERENCES [dbo].[Users] ([userID])
GO
ALTER TABLE [dbo].[NotAllowForUser] CHECK CONSTRAINT [FK_NotAllowForUser_Users1]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([userID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Users]
GO
USE [master]
GO
ALTER DATABASE [BRcarProject] SET  READ_WRITE 
GO
