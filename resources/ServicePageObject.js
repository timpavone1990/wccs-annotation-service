module.exports = {
    "class": "Service",
    "url": "http://www.fernuni-hagen.de/KSW/portale/babw/service/",
    "contents": {
        "header": {
            "class": "Header",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]", "offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]", "offset": 43 }
            },
            "contents": {
                "fernUni": {
                    "class": "Brand",
                    "selector": {
                        "type": "RangeSelector",
                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]", "offset": 0 },
                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]", "offset": 0 }
                    },
                    "references": {
                        "homepage": {
                            "class": "FernUniInternalLink",
                            "destination": "http://www.fernuni-hagen.de/",
                            "selector": {
                                "type": "RangeSelector",
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]", "offset": 0 },
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]", "offset": 0 }
                            }
                        },
                        "logo": {
                            "class": "Image",
                            "destination": "service_files/feulogo.png",
                            "selector": {
                                "type": "RangeSelector",
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]/img[1]", "offset": 0 },
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/a[1]/img[1]", "offset": 0 }
                            }
                        }
                    },
                    "contents": {}
                }
            },
            "references": {}
        },
        "portal": {
            "class": "Portal",
            "content": "B.A. Bildungswissenschaft",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/h3[1]/a[1]", "offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/h3[1]/a[1]", "offset": 25 }
            },
            "references": {
                "homepage": {
                    "class": "FernUniInternalLink",
                    "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/",
                    "selector": {
                        "type": "RangeSelector",
                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/h3[1]/a[1]", "offset": 0 },
                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[1]/div[1]/div[1]/div[1]/h3[1]/a[1]", "offset": 25 }
                    }
                }
            },
            "contents": {}
        },
        "heading": {
            "class": "PageHeading",
            "content": "Service",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/h3[1]","offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/h3[1]", "offset": 7 }
            },
            "contents": {},
            "references": {}
        },
        "subHeading": {
            "class": "SectionHeading",
            "content": "Fragen und Antworten zum B.A. Bildungswissenschaft (F.A.Q.s)",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/h4[1]", "offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/h4[1]", "offset": 60 }
            },
            "contents": {},
            "references": {}
        },
        "introduction": {
            "class": "Text",
            "content": "Viele Fragen zum B.A. Bildungswissenschaft klären sich durch die Lektüre dieser FAQs! Bitte machen Sie zunächst von diesem Angebot Gebrauch, bevor Sie sich an die Studienberatung wenden.\n(Stand: 06/2015)",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[1]/p[1]", "offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[1]/p[1]", "offset": 203 }
            },
            "contents": {},
            "references": {}
        },
        "closing": {
            "class": "Text",
            "content": "Wurden Ihre Fragen beantwortet?\nFalls nicht, sprechen Sie uns bitte an. Sie finden Ihre Ansprechpartnerin/Ihren Ansprechpartner unter Kontakt.",
            "selector": {
                "type": "RangeSelector",
                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/p[1]", "offset": 0 },
                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/p[1]", "offset": 142 }
            },
            "contents": {},
            "references": {
                "fernUniLinks": [
                    {
                        "class": "FernUniInternalLink",
                        "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/kontakt/",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/p[1]/a[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/p[1]/a[1]", "offset": 7 }
                        }
                    }
                ]
            }
        },
        "faqSections": [
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]", "offset": 24 },
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]", "offset": 0 }
                },
                "contents": {
                    "title": {
                        "class": "SectionHeading",
                        "content": "Inhaltliche Ausrichtung",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/h4[1]", "offset": 23 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "class": "FAQEntry",
                            "selector": {
                                "type": "RangeSelector",
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]", "offset": 0 },
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]", "offset": 139 }
                            },
                            "contents": {
                                "question": {
                                    "class": "FAQQuestion",
                                    "content": "Ich interessiere mich für den Bachelorstudiengang Bildungswissenschaft. Handelt es sich dabei um ein erziehungswissenschaftliches Studium?",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": {
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]",
                                            "offset": 0
                                        },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]", "offset": 138 }
                                    },
                                    "contents": {},
                                    "references": {}
                                },
                                "answer": {
                                    "class": "FAQAnswer",
                                    "content": "Ja. Im Zentrum des Bachelorstudiengangs Bildungswissenschaft steht die Reflexion und Gestaltung von Erziehungs- und Bildungsprozessen. So sind die Module auf typische erziehungswissenschaftliche Themenfelder wie Bildung und Gesellschaft; interkulturelle Erziehungswissenschaft; Bildung, Arbeit und Beruf; Allgemeine Didaktik, Mediendidaktik und Medienpädagogik oder empirische Bildungsforschung ausgerichtet. Ergänzt wird das Curriculum durch Anteile aus der Psychologie und Soziologie. Die Bezeichnung Bachelor „Bildungswissenschaft“ wurde auch deshalb gewählt, weil das lebenslange Lernen als Bildungsaufgabe über die gesamte Lebenszeit betont wird.\n\nNeben dem Fachwissen erwerben Sie in diesem Studiengang Kompetenzen, um Tätigkeiten in gesellschaftlichen und pädagogischen Handlungsfeldern auszuüben. Nach Abschluss des Studiums sollen Sie gegenwärtige Bildungsaufgaben in beruflichen Kontexten ermitteln und gestalten, neue Medien in der beruflichen Praxis anwenden und die Veränderungen der Kommunikationsformen und -inhalte durch den Einsatz neuer Medien reflektieren können.\n\n",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]", "offset": 1084 }
                                    },
                                    "contents": {},
                                    "references": {}
                                }
                            },
                            "references": {}
                        },
                        {
                            "class": "FAQEntry",
                            "selector": {
                                "type": "RangeSelector",
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]", "offset": 0 },
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]", "offset": 45 }
                            },
                            "contents": {
                                "question": {
                                    "class": "FAQQuestion",
                                    "content": "Ist der Studiengang international anerkannt?",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]", "offset": 44 }
                                    },
                                    "contents": {},
                                    "references": {}
                                },
                                "answer": {
                                    "class": "FAQAnswer",
                                    "content": "Ja. Denn der Studiengang richtet sich nach den Rahmenvorgaben der Kultusministerkonferenz, wonach ein Bachelorstudium sechs Semester dauern und 5400 Arbeitsstunden umfassen soll und dementsprechend 180 ECTS-Punkte für modulbezogene Prüfungsleistungen sowie die Bachelor-Arbeit angerechnet werden. Es gibt also auch keine Zwischenprüfungen mehr, sondern die Prüfungen sind alle modulbezogen.\n\n",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]", "offset": 392 }
                                    },
                                    "contents": {},
                                    "references": {}
                                }
                            },
                            "references": {}
                        },
                        {
                            "class": "FAQEntry",
                            "selector": {
                                "type": "RangeSelector",
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]", "offset": 0 },
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]", "offset": 87 }
                            },
                            "contents": {
                                "question": {
                                    "class": "FAQQuestion",
                                    "content": "Ist der BA Bildungswissenschaft vergleichbar mit Sozialpädagogik oder Sozialer Arbeit?",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]", "offset": 86 }
                                    },
                                    "contents": {},
                                    "references": {}
                                },
                                "answer": {
                                    "class": "FAQAnswer",
                                    "content": "Vergleichbar schon, aber nicht äquivalent: Zwar gibt es inhaltliche Übereinstimmungen, aber der BA Bildungswissenschaft ist stärker als ein Studiengang in Sozialpädagogik oder Sozialer Arbeit auf die Wissenschaft ausgerichtet, z.B. indem die empirischen Forschungsmethoden und wissenschaftliches Arbeiten eine große Rolle spielen. Der Praxisanteil ist dagegen viel geringer; auch sozialrechtliche Fragen werden im Studium der Bildungswissenschaft nicht erörtert.\n\nWenn Sie eine Stelle antreten möchten, die von der Ausrichtung her eigentlich für Absolventinnen und Absolventen der Sozialarbeit bzw. Sozialpädagogik vorgesehen ist, müssten Sie mit dem zukünftigen Arbeitgeber besprechen, inwiefern dies möglich ist.\n\n",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]", "offset": 716 }
                                    },
                                    "contents": {},
                                    "references": {}
                                }
                            },
                            "references": {}
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]", "offset": 0 },
                    "endSelector": { "offset": 23, "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]" },
                    "type": "RangeSelector"
                },
                "contents": {
                    "title": {
                        "class": "SectionHeading",
                        "content": "Berufsfeldorientierung",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/h4[1]", "offset": 22 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "class": "FAQEntry",
                            "selector": {
                                "type": "RangeSelector",
                                "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]", "offset": 152 },
                                "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]", "offset": 0 }
                            },
                            "contents": {
                                "question": {
                                    "class": "FAQQuestion",
                                    "content": "Was fange ich nach dem Studium mit dem Abschluss“Bachelor of Arts“ in Bildungswissenschaft an? Welche Berufsaussichten habe ich mit diesem Studiengang?",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]", "offset": 151 }
                                    },
                                    "contents": {},
                                    "references": {}
                                },
                                "answer": {
                                    "class": "FAQAnswer",
                                    "content": "Der Studiengang bereitet Sie auf Tätigkeiten in öffentlichen und privaten Organisationen und Institutionen im Bereich der Grundlagenforschung, der Konzeptualisierung, der Organisation, Durchführung und Evaluation von Bildungsprozessen sowie mediatisierten Kommunikationsabläufen vor.\nDiese Kompetenzen werden benötigt in Institutionen der allgemeinen und beruflichen Aus- und Weiterbildung, Einrichtungen der Erwachsenen- und politischen Bildung, Personalentwicklung in Unternehmen, Kammern, Arbeitsverwaltung und Verbänden, Bildungsmanagement, -beratung und -forschung, Fördereinrichtungen und in Organisationen der bi- und multilateralen Bildungs- und Berufsbildungszusammenarbeit.\nDer Bachelorstudiengang Bildungswissenschaft ist für all diejenigen gedacht, die in der Bildung und Ausbildung von jungen Menschen und Erwachsenen, in Personalmanagement und Arbeitsverwaltung, in Bildungsverwaltung und -forschung oder als (Unternehmens-)Berater tätig sind oder sein wollen. Nach dem Studium sollen die Absolventen und Absolventinnen in der Lage sein, als Bildungspersonal in verschiedenen beruflichen Kontexten tätig zu werden.\n\n",
                                    "selector": {
                                        "type": "RangeSelector",
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]", "offset": 0 },
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]", "offset": 1130 }
                                    },
                                    "contents": {},
                                    "references": {}
                                }
                            },
                            "references": {}
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]", "offset": 26 }
                },
                "contents": {
                    "title": {
                        "class": "SectionHeading",
                        "content": "Zulassungsvoraussetzungen",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/h4[1]", "offset": 25 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "contents": {
                                "question": {
                                    "class": "FAQQuestion",
                                    "content": "Ich habe keine Hochschulreife, möchte aber gerne den B.A. Bildungswissenschaft studieren. Ist das möglich?",
                                    "selector": {
                                        "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]", "offset": 106 },
                                        "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]", "offset": 0 },
                                        "type": "RangeSelector"
                                    },
                                    "contents": {},
                                    "references": {}
                                },
                                "answer": {
                                    "class": "FAQAnswer",
                                    "content": "Kein Problem. Beruflich Qualifizierte haben die Möglichkeit, ein Probestudium an der FernUniversität aufzunehmen. Sie studieren im Probestudium gemäß dem Studienplan als Vollzeit- oder Teilzeitstudierender und legen die vorgesehenen Prüfungen ab. Das Probestudium im Bachelorstudiengang Bildungswissenschaft gilt als erfolgreich abgeschlossen, wenn Sie nach mindestens vier und maximal acht Semestern mindestens 6 Module (entspricht 90 ECTS) bestanden haben. Eine weitere Möglichkeit den Hochschulzugang zu erlangen, besteht über das Absolvieren einer Zugangsprüfung. Sie besteht aus zwei Klausuren, mit denen allgemeine und für den jeweiligen Studiengang erforderliche Kenntnisse überprüft werden. Wenn Ihre Qualifikation als fachlich entsprechend eingestuft wurde und Sie zusätzlich eine mind. 3-jährige Berufspraxis in diesem Ausbildungsberuf nachweisen, ist eine direkte Einschreibung (ohne Probestudium oder Zugangsprüfung) in den Studiengang möglich. Dies gilt derzeit für diese Ausbildungsberufe. \n\n",
                                    "selector": {
                                        "endSelector": {
                                            "offset": 1006,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienangebot/beruflich_qualifizierte/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 23,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienangebot/beruflich_qualifizierte/probestudium.shtml",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 12,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[2]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[2]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienangebot/beruflich_qualifizierte/zugangspruefung.shtml",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 14,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[3]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[3]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienangebot/beruflich_qualifizierte/fachliche_eignung.shtml",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 23,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[4]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/span[4]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    }
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 107,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Benötige ich gute Englisch-Kenntnisse? Und sind die Materialien in Deutsch oder in Englisch?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 92,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Die Materialien in Form von Studienbriefen sind in diesem Studiengang in deutscher Sprache verfasst. Wenn allerdings Zusatzmaterialien aus dem Internet herangezogen werden, kann es natürlich sein, dass es sich auch um englischsprachige Artikel handelt. Aus diesem Grund sind Grundkenntnisse der englischen Sprache von Vorteil.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 328,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 93,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Muss ich einen Deutschtest machen?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 34,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Wenn Sie Ihre Studienqualifikation nicht an einer deutschsprachigen Einrichtung erworben haben, müssen Sie bei der Einschreibung einen anerkannten Nachweis Ihrer Deutschkenntnisse vorlegen. Einen Deutschtest können Sie an der FernUniversität in Hagen absolvieren, aber auch an anderen Unis oder im Goethe-Institut. Nähere Informationen erteilt Ihnen das Studierendensekretariat.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 380,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 35,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Welche technische Ausstattung benötige ich?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 43,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Neben einem Computer mit herkömmlicher Software – Office-Anwendungen, aktuellem Webbrowser, Adobe Acrobat Reader – ist ein Internetzugang erforderlich. Sowohl für den Computer als auch für den Internetzugang gilt: Je schneller bzw. leistungsfähiger, desto besser.\nZu Beginn des Studiums benötigen Sie Kenntnisse im Umgang mit eMail und Internetrecherchen. Hilfreich sind Kenntnisse in der Nutzung synchroner und asynchroner Kommunikationsformen. Im Laufe des Studiengangs lernen Sie diese zunehmend kennen.\n\n \n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 511,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 44,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[1]/article[4]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]", "offset": 14 }
                },
                "contents": {
                    "title": {
                        "content": "Anerkennungen",
                        "class": "SectionHeading",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/h4[1]", "offset": 13 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "contents": {
                                "question": {
                                    "content": "Werden mir Module aus anderen Studiengängen anerkannt?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 54,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Module aus anderen Studiengängen können anerkannt werden, sofern sie mit den Inhalten der B.A.-Module übereinstimmen. Haben Sie an einer anderen Universität bereits Module in der Bildungswissenschaft absolviert, können diese nach Überprüfung anerkannt werden. Da sich die Modulprüfungen auf alle verbindlichen Inhalte des Moduls beziehen, können nur ganze Module anerkannt werden, keine Teilleistungen. Bedauerlicherweise können auch keine Prüfungsleistungen aus dem Bachelor Kulturwissenschaften oder dem Bachelor Politik und Organisation anerkannt werden, da sie inhaltlich ganz anders ausgerichtet sind. Allerdings kann das dort abgeleistete Praktikum angerechnet werden. Weitere Informationen finden Sie unter „Anerkennungen„.\n\nAnerkennungen aus Magister-/Diplom- oder Lehramtsstudiengängen können i.d.R. nicht auf die Bachelorstudiengänge angerechnet werden. Das liegt an der Modularisierung des Studiengangs: Statt Leistungsnachweise und Blockprüfungen (Zwischen- und Abschlussprüfungen) wird jetzt jedes Modul durch eine Prüfungsleistung abgeschlossen. Die Summe dieser Prüfungsleistungen ergibt dann den Abschluss „Bachelor of Arts Bildungswissenschaft“. Deshalb ist eine Vergleichbarkeit mit den vorgenannten Studiengängen bzw. -leistungen nicht gegeben. Hier gilt die Regelung: Wer bereits das Vordiplom oder die Zwischenprüfung im Hauptfach Erziehungswissenschaft erfolgreich abgelegt hat, bekommt das Modul 1A des B.A. Bildungswissenschaft bei Vorlage einer beglaubigten Kopie des entsprechenden Zeugnisses anerkannt. \n\nWeitere Informationen zu Anerkennungen und die entsprechenden Formulare finden Sie hier.\n\n \n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/einstieg/anerkennung-bereits-erbrachter-studien-und-pruefungsleistungen/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 13,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/einstieg/anerkennung-bereits-erbrachter-studien-und-pruefungsleistungen/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 4,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[3]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[3]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 1625,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 55,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]", "offset": 20 }
                },
                "contents": {
                    "title": {
                        "class": "SectionHeading",
                        "content": "Studienorganisation",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/h4[1]", "offset": 19 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "contents": {
                                "question": {
                                    "content": "Kann ich etwas zusätzliches studieren (Wahlpflichtfächer)? Gibt es so etwas wie Nebenfächer?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 92,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Nein, es gibt keine Nebenfächer. Jedes Modul enthält Pflichtkurse und z.T. auch Wahlpflichtkurse.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 99,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 93,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Kann ich während des Studiums von Vollzeit in Teilzeit wechseln?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 64,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Ja, bei jeder Rückmeldung können Sie den Status wechseln.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 59,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 65,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "In welcher Reihenfolge müssen die Module belegt werden?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 55,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Der Studienverlauf gliedert sich in drei Studienphasen. Die Reihenfolge der Wahl der Module ist innerhalb der Studienphasen flexibel. Für den Übergang von der ersten in die zweite Studienphase sind drei erfolgreich abgeschlossene Module der ersten Studienphase notwendig. Für die Meldung zur Prüfung im Modul 2C „Psychologisches Wahlpflichtmodul“ muss das Modul 1D „Empirische Bildungsforschung – quantitative Methoden“ erfolgreich absolviert sein. Zu den Prüfungen im Profilstudium wird zugelassen, wer vier Modulprüfungen aus dem Kernstudium 1 und drei aus dem Kernstudium 2 bestanden hat. Ab dem Sommersemester 2016 wird zu den Prüfungen im Profilstudium zugelassen, wer vier Modulprüfungen aus dem Kernstudium 1 und drei aus dem Kernstudium 2, welche das Modul 2C beinhalten müssen, bestanden hat. Einen idealtypischen Verlaufsplan finden Sie im Modulhandbuch.\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/downloads/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 13,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]/p[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]/p[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 866,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 56,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Es geht um das Praktikum am Ende des Studiums. Wo finde ich Informationen?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 74,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Alles Wissenswerte zum Praktikum ist in den Informationen zum Praktikum zu finden.\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/downloads/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 27,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]/p[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]/p[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 84,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 75,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[4]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Muss ich Präsenzveranstaltungen besuchen?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 41,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Auch wenn Sie an einer FernUniversität studieren, finden dennoch Präsenzveranstaltungen entweder an der Uni selbst oder in den Studienzentren statt. Es werden Prüfungen vorbereitet bzw. Studieninhalte mit den anderen Studierenden erarbeitet und diskutiert. In diesem Studiengang ist auf jeden Fall der Besuch einer Präsenzveranstaltung oder eines Onlineseminars im gesamten Studium verpflichtend. Dieser sollte möglichst innerhalb der ersten beiden Studienphasen erfolgen, da in der dritten Studienphase nur in geringem Umfang Präsenzveranstaltungen angeboten werden. Es bleibt Ihnen überlassen, ob Sie noch weitere Veranstaltungen besuchen. Wir würden Ihnen aber empfehlen, an mehreren Veranstaltungen teilzunehmen.\nWenn es aber nachvollziehbare Gründe gibt, warum jemand nicht an der Präsenzveranstaltung teilnehmen kann (z.B. inhaftierte Studierende), werden sich in Absprache mit den Modulbetreuerinnen und -betreuern auf jeden Fall andere Lösungen (z.B. Verfassung einer Ausarbeitung) finden.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 999,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 42,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[5]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Ich habe im Studienportal über verschiedene Möglichkeiten der Betreuung gelesen. Meine Frage ist nun: Wie genau muss ich mir dies vorstellen? Arbeite ich vorwiegend mit den Studienmaterialien alleine zu Hause?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 209,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Die Betreuung in unserem Fernstudium geschieht durch die Modulbetreuerinnen und -betreuer aus den Lehrgebieten an der FeU und durch Mentorinnen und Mentoren in den verschiedenen bundesweiten Regionalzentren. Wenn Sie z.B. inhaltliche Fragen zu den Studienmaterialien haben, können Sie die Modulbetreuerinnen und -betreuer ansprechen. Außerdem gibt es in Ihrer Region in der Regel auch ein Regionalzentrum, in dem Mentorinnen und Mentoren für den BA zuständig sein werden und z.B. in Präsenzveranstaltungen die zu erbringenden Prüfungsleistungen mit Ihnen vorbereiten. Ein Verzeichnis aller Regionalzentren finden Sie im Internet unter: http://www.fernuni-hagen.de/universitaet/einrichtungen/studienzentren\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/universitaet/einrichtungen/studienzentren",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 69,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 707,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 210,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[6]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Gibt es einen Master, der auf diesen Bachelor aufbaut?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 54,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Seit dem Wintersemester 2008/2009 wird der Master eEducation/ Bildung und Medien konsekutiv zum Bachelor Bildungswissenschaft angeboten. Es handelt sich dabei um ein 4-semestriges Studium (bei Vollzeit) bzw. 8-semestriges Studium (bei Teilzeit), in dem nicht nur Wissen, sondern Kompetenzen zur Planung, Gestaltung, Umsetzung und Evaluation mediendidaktischer Szenarien unter Berücksichtigung verschiedener Disziplinen erworben werden. Mit Hilfe von ePortfolios werden die erworbenen Kompetenzen im Laufe des Studiengangs reflektiert und in diesen kreativen Schaustücken dokumentiert. Damit soll die Weiterentwicklung der individuellen Lernbiografie der Studierenden erleichtert werden.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 688,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 55,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[7]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Wie hoch sind die Gebühren in diesem Studium?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 45,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Sämtliche Informationen zu den anfallenden Gebühren finden Sie auf den allgemeinen Informationsseiten der FernUniversität.\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienorganisation/gebuehren/",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 20,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 124,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 46,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[8]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Wer gibt mir Auskunft über mein Studienkonto?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 45,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Über Ihr Studienkonto kann Sie das Studierendensekretariat informieren.\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/studium/studienorganisation/studierendensekretariat.shtml",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 23,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/div[1]/p[1]/span[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 73,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 46,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/article[9]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]", "offset": 10 }
                },
                "contents": {
                    "title": {
                        "class": "SectionHeading",
                        "content": "Prüfungen",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/h4[1]", "offset": 9 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "contents": {
                                "question": {
                                    "content": "Wie funktioniert das mit den Klausuren?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 39,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Das Bedürfnis nach Klausurinformationen ist verständlicherweise recht groß. Sie erhalten daher in den einzelnen Modulen im Laufe des Semesters hinreichende Informationen, die auf eventuelle Schwerpunktsetzungen oder Stoffeingrenzungen hinweisen. Achten Sie darauf, dass die Informationen aktuell sind und nicht möglicherweise aus vorherigen Semestern und damit veraltet sind. Zur Prüfungsvorbereitung können Sie sich mit den Modulbetreuerinnen und -betreuern über die inhaltsbezogenen Aufgaben und Übungen insbesondere in der Lernumgebung moodle austauschen.\n\n \n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 563,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 40,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Was sind ePortfolios? Sind das Prüfungsleistungen?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 50,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Mit ePortfolios werden Produkte mit Hilfe elektronischer Medien gesammelt und archiviert. Dies kann z.B. ein Weblog, eine Präsentation oder Html-Seite sein. ePortfolios dienen dazu, dass Sie Ihre Leistungen und Kompetenzen selbst dokumentieren, die Sie in diesem Studium erworben haben. In dem Portfolio dokumentieren Sie beispielsweise Ihre Hausarbeit. Prüfungsleistungen im BA Bildungswissenschaft sind generell Hausarbeiten, Klausuren und mündliche Prüfungen. EPortfolios sind in diesem Sinne keine Prüfungsleistungen.\nKontinuierlich eingesetzt dokumentieren Portfolios nicht nur eine Momentaufnahme, sondern Ihren gesamten Lernprozess. Sie begleiten Studierende in ihrer Lernkarriere. Portfolios demonstrieren Kompetenzen und sind daher als Demonstrationsobjekte (Schaustücke) sowohl für den Bildungsprozess (z.B. Übertritt von einer Bildungsinstitution in eine andere) als auch für die (zukünftigen) Arbeitgeber (z.B. bei Bewerbungsgesprächen) interessant. Weil Portfolios den Lernprozess dokumentieren (und nicht nur eine erbrachte Leistung), sind sie auch für die kritische Reflexion des eigenen Lernprozesses geeignet und können damit die Herausbildung der Kompetenz des selbstorganisierten Lernens fördern.\nAllerdings werden wir im BA das kontinuierliche Führen von ePortfolios nicht verpflichtend machen, sondern ihren Einsatz in verschiedenen Modulen für die Reflexion der erworbenen Kenntnisse und Fähigkeiten anregen. Im anschließenden Master-Studiengang eEducation sollen ePortfolios dagegen konsequent über die Semester geführt werden.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 1552,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 51,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Darf ich eine Hausarbeit frankiert mit einer Internetmarke verschicken?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 71,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Eine Hausarbeit ist fristgemäß im Prüfungsamt einzureichen. Die Einhaltung der festgelegten Abgabefrist wird durch den Poststempel nachgewiesen. Bei Internetmarken sind Entgelt, Erstellungsmonat und -jahr aufgedruckt. Die Entwertung von Internetmarken erfolgt nicht durch einen Poststempel. Weil der Poststempel auf Internetmarken i.d.R. fehlt, kann auch nicht die fristgerechte Abgabe nachgewiesen werden. Aus diesem Grund ist die Verwendung von Internetmarken nicht geeignet.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 479,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 72,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        }
                    ]
                },
                "references": {}
            },
            {
                "class": "FAQSection",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]", "offset": 19 }
                },
                "contents": {
                    "title": {
                        "content": "BA-Abschlussarbeit",
                        "class": "SectionHeading",
                        "selector": {
                            "type": "RangeSelector",
                            "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[1]/h4[1]", "offset": 0 },
                            "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[1]/h4[1]", "offset": 18 }
                        },
                        "contents": {},
                        "references": {}
                    },
                    "entries": [
                        {
                            "contents": {
                                "question": {
                                    "content": "Wie ist das Verfahren bei der B.A.-Abschlussarbeit?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 51,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Sie können die Bachelor-Arbeit (z.B. per E-Mail) beim Prüfungsamt der Fakultät für Kultur- und Sozialwissenschaften anmelden, indem Sie einen formlosen Antrag auf Zulassung stellen. Alle Informationen finden Sie in diesem Dokument.\nDie Richtlinien zur „B.A. Abschlussarbeit“ sind im § 16 der Studienordnung festgelegt. Sie können die Studienordnung hier nachlesen. Der B.A.-Themenstellung wird ein „Beipackzettel“ mit Hinweisen über die B.A.-Arbeit beigefügt.\n\n",
                                    "contents": {},
                                    "references": {
                                        "fernUniLinks": [
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/wp-content/uploads/sites/3/2015/06/Hinweise-zur-B.A.-Arbeit.pdf",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 15,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[1]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[1]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/wp-content/uploads/sites/3/2015/06/sto_babw.pdf",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 4,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[2]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[2]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            },
                                            {
                                                "destination": "http://www.fernuni-hagen.de/KSW/download/formulare/Beipackzettel-BA-MA-Arbeiten.pdf",
                                                "selector": {
                                                    "endSelector": {
                                                        "offset": 15,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[3]"
                                                    },
                                                    "startSelector": {
                                                        "offset": 0,
                                                        "type": "XPathSelector",
                                                        "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]/p[1]/a[3]"
                                                    },
                                                    "type": "RangeSelector"
                                                },
                                                "class": "FernUniInternalLink"
                                            }
                                        ]
                                    },
                                    "selector": {
                                        "endSelector": {
                                            "offset": 461,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 52,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[1]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Was ist das „Diploma Supplement“?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 33,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Hierzu schreibt das Bologna-Zentrum der Hochschulrektorenkonferenz auf ihrer Internetseite:\n„Das „Diploma Supplement“ (DS) ist ein Text mit einheitlichen Angaben zur Beschreibung von Hochschulabschlüssen und damit verbundener Qualifikationen. Als ergänzende Information zu den offiziellen Dokumenten über Hochschulabschlüsse (Verleihungs-Urkunden, Prüfungs-Zeugnisse) soll es – international und auch national – die Bewertung und Einstufung von akademischen Abschlüssen sowohl für Studien- als auch für Berufszwecke erleichtern und verbessern.“\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 546,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 34,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[2]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        },
                        {
                            "contents": {
                                "question": {
                                    "content": "Darf ich eine Abschlussarbeit frankiert mit einer Internetmarke verschicken?",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 76,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]/h6[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQQuestion"
                                },
                                "answer": {
                                    "content": "Eine Abschlussarbeit ist fristgemäß im Prüfungsamt einzureichen. Die Einhaltung der festgelegten Abgabefrist wird durch den Poststempel nachgewiesen. Bei Internetmarken sind Entgelt, Erstellungsmonat und -jahr aufgedruckt. Die Entwertung von Internetmarken erfolgt nicht durch einen Poststempel. Weil der Poststempel auf Internetmarken i.d.R. fehlt, kann auch nicht die fristgerechte Abgabe nachgewiesen werden. Aus diesem Grund ist die Verwendung von Internetmarken nicht geeignet.\n\n",
                                    "contents": {},
                                    "references": {},
                                    "selector": {
                                        "endSelector": {
                                            "offset": 484,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "startSelector": {
                                            "offset": 0,
                                            "type": "XPathSelector",
                                            "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]/div[1]"
                                        },
                                        "type": "RangeSelector"
                                    },
                                    "class": "FAQAnswer"
                                }
                            },
                            "references": {},
                            "selector": {
                                "endSelector": {
                                    "offset": 77,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "startSelector": {
                                    "offset": 0,
                                    "type": "XPathSelector",
                                    "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[8]/div[1]/div[2]/div[1]/div[1]/article[3]"
                                },
                                "type": "RangeSelector"
                            },
                            "class": "FAQEntry"
                        }
                    ]
                },
                "references": {}
            }
        ]
    },
    "references": {
        "siteMainPages": [
            {
                "class": "FernUniInternalLink",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/einstieg/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/a[1]", "offset": 9 }
                }
            },
            {
                "class": "FernUniInternalLink",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/studium/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": {
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]",
                        "offset": 0
                    },
                    "endSelector": {
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]",
                        "offset": 8
                    }
                }
            },
            {
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/pruefungen/",
                "selector": {
                    "endSelector": {
                        "offset": 10,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]"
                    },
                    "startSelector": {
                        "offset": 0,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]"
                    },
                    "type": "RangeSelector"
                },
                "class": "FernUniInternalLink"
            },
            {
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/",
                "selector": {
                    "endSelector": {
                        "offset": 8,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[4]/a[1]"
                    },
                    "startSelector": {
                        "offset": 0,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[4]/a[1]"
                    },
                    "type": "RangeSelector"
                },
                "class": "FernUniInternalLink"
            },
            {
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/sitemap/",
                "selector": {
                    "endSelector": {
                        "offset": 1,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[5]/a[1]"
                    },
                    "startSelector": {
                        "offset": 0,
                        "type": "XPathSelector",
                        "value": "/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/ul[1]/li[5]/a[1]"
                    },
                    "type": "RangeSelector"
                },
                "class": "FernUniInternalLink"
            }
        ],
        "servicePages": [
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[1]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[1]/a[1]", "offset": 7 }
                }
            },
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/aktuelles/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[2]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[2]/a[1]", "offset": 9 }
                }
            },
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/kontakt/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[3]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[3]/a[1]", "offset": 7 }
                }
            },
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/downloads/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[4]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[4]/a[1]", "offset": 9 }
                }
            },
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/online-systeme/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[5]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[5]/a[1]", "offset": 14 }
                }
            },
            {
                "class": "ServicePage",
                "destination": "http://www.fernuni-hagen.de/KSW/portale/babw/service/vom-bachelor-zum-master/",
                "selector": {
                    "type": "RangeSelector",
                    "startSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[6]/a[1]", "offset": 0 },
                    "endSelector": { "type": "XPathSelector", "value": "/html[1]/body[1]/div[1]/section[2]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/ul[1]/li[6]/a[1]", "offset": 23 }
                }
            }
        ]
    }
};