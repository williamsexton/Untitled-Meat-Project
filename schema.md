# Users
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   email       | string      |   not null, unique |
|password-digest| string       |    not null |
|session_token| string      |    not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

user 
index on email, index on session token
has many orders, 
has one box,
has many subscriptions,
has many testimonials
has many box-products through box
has many subscribed-products through subscriptions
has many ordered-products through orders


# Products
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|description    | text       |    not null |
|price    | float       |    not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

has_many box-inclusions
has_many set-inclusions
has_many order-inclusions
has_many subscriptions


# Testimonials
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   user_id     | centered      |   not null, unique      |
|product_id     | integer       |    not null, foreign_key |
|body           | text       |    not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

unique index on [user_id, product_id]
belongs to user,
belongs to product

# Box
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   user_id     | integer      |   not null, foreign_key      |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

unique index on user_id,
belongs to user,
has many box_inclusions
has many prooducts(and sets) through box_inclusions


# sets
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
| price           | float       | not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

belongs to box
has many set inclusions
has many products through set inclusions

# orders
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
| price           | float       | not null |
|   user_id     | integer      |   not null, foreign_key      |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

belongs to user
has many order inclusions
has many products through order inclusions



# set-inclusions
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   set_id     | integer      |   not null, foreign_key     |
|product_id     | integer       |    not null, foreign_key |
|body           | text       |    not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

joins table
index on set_id, product_id
belongs to sets
belongs to products


# Box-inclusions
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   box_id     | integer      |   not null, foreign_key      |
|boxable_id     | integer       |    not null, foreign_key |
|   boxable_type| string      |   not null      |
|created_at      | timestamp       |    not null |
|updated_at      | timestamp       |    not null |

POLYMORMPIC JOINS TABLE
belongs to box
belongs to set/product (polymorph)

# order-inclusions
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   order_id     | integer      |   not null, foreign key      |
|product_id     | integer       |    not null, foreign_key |
|body           | text       |    not null |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

joins table
belongs to order
belongs to product

# subscriptions
| table-name        | data-type           | details  |
| ------------- |:-------------:| -----:|
| id            | integer       | primary-key, unique |
|   user_id     | integer      |   not null, foreign_key     |
|product_id     | integer       |    not null, foreign_key |
|created_at           | timestamp       |    not null |
|updated_at           | timestamp       |    not null |

joins table
belongs to user
belongs to product

