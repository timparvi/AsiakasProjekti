<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>
<meta charset="UTF-8">
<script src="scripts/main.js"></script>
<link href="style/main.css" rel="stylesheet" type="text/css">
<title>Insert title here</title>
</head>
<body>
<div>
 <label for="searchInput">Hakusana:</label>
    <input type="text" id="searchInput">
    <button onclick="etsiAsiakas()">Hae</button>
</div>
<table id="listaus">
	<thead>
		<tr>
			<th>Etunimi</th>
			<th>Sukunimi</th>
			<th>Puhelin</th>
			<th>Sposti</th>
			<th></th>
		</tr>
		</thead>
		<tbody id="tbody">
		</tbody>
	</table>
<span id="ilmo"></span>
<script>
haeAsiakkaat();
</script>
</body>
</html>