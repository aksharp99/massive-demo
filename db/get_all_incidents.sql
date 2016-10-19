select incidents.id, incidents.us_state as incidents_us_state, injuries.name as injuries_name, affected_areas.name as affected_areas_name, causes.name as causes_name
from incidents
join injuries on incidents.injury_id=injuries.id
join affected_areas on injuries.affected_area_id = affected_areas.id
join causes on causes.id = incidents.cause_id
where incidents.us_state = $1;
