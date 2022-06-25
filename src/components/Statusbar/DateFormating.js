function addZero(t) {
	if (t > 9) return t;
	return (t = "0" + t);
}

function monthCoverting(m) {
	switch (m) {
		case (m = 0):
			m = "Jan";
			break;

		case (m = 1):
			m = "Feb";
			break;

		case (m = 2):
			m = "Mar";
			break;

		case (m = 3):
			m = "Apr";
			break;

		case (m = 4):
			m = "May";
			break;

		case (m = 5):
			m = "Jun";
			break;

		case (m = 6):
			m = "Jul";
			break;

		case (m = 7):
			m = "Aug";
			break;

		case (m = 8):
			m = "Sep";
			break;

		case (m = 9):
			m = "Oct";
			break;

		case (m = 10):
			m = "Nov";
			break;

		case (m = 11):
			m = "Dec";
			break;
	}

	return m;
}

function weekdayConverting(wd) {
	switch (wd) {
		case (wd = 0):
			wd = "Sun";
			break;

		case (wd = 1):
			wd = "Mon";
			break;

		case (wd = 2):
			wd = "Tue";
			break;

		case (wd = 3):
			wd = "Wed";
			break;

		case (wd = 4):
			wd = "Thu";
			break;

		case (wd = 5):
			wd = "Fri";
			break;

		case (wd = 6):
			wd = "Sat";
			break;
	}

	return wd;
}

export { addZero, monthCoverting, weekdayConverting };
